import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL: string = 'http://78.241.28.199:8090/public/index.php/api/';
  private photosPath: string = '../assets/image/photos/'
  public voitures: Voiture[] = [];
  constructor(private http: HttpClient) {}

  getVoiture(filters: any = {}): Promise<Voiture[]> {

    let urlQuery = this.URL + 'annonces';

    let params = new HttpParams();
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*' // Add this to nelmio_cors config to backend config
    });
    //Setting params if
    filters.brand ? params = params.set('modele.marque.nom', filters.brand) : '';
    !filters.brand ? params = params.delete("modele.marque.nom") : '';
    filters.modele ? params = params.set('modele.nom', filters.modele) : '';
    !filters.modele ? params = params.delete("modele.nom") : '';
    filters.rangeKm ? params = params.set('kilometrage[between]', filters.rangeKm[0] + '..' + filters.rangeKm[1]) : '';
    if(filters.rangeKm && (filters.rangeKm[0] < 10001 && filters.rangeKm[1] > 499999)) {
        params = params.delete('kilometrage[between]');
    }
    filters.rangePrix ? params = params.set('prix[between]', filters.rangePrix[0] + '..' + filters.rangePrix[1]) : '';
    if(filters.rangePrix && (filters.rangePrix[0] < 1001 && filters.rangePrix[1] > 199999)) {
      params = params.delete('prix[between]');
    }
    filters.rangeYear ? params = params.set('anneeCirculation[between]', filters.rangeYear[0] + '..' + filters.rangeYear[1]) : '';
    if(filters.rangeYear && (filters.rangeYear[0] < 1991 && filters.rangeYear[1] > 2020)) {
      params = params.delete('anneeCirculation[between]');
    }
    filters.typeCarburant ? params = params.set('typeCarburant.libelle', filters.typeCarburant) : '';
    !filters.typeCarburant ? params = params.delete("typeCarburant.libelle") : '';

    console.log(filters.rangePrix);
  console.log(params.toString());

    let httpOptions = {
      headers: headers,
      params: params
    }

    return this.http
      .get(urlQuery, httpOptions)
      .toPromise()
      .then(
        (data: any) => {
          let voitures: Voiture[] = [];
          data['hydra:member'].forEach((voiture: any) => {
            let photos: string[] =[];
            //build voiture photosPath array
            voiture.photos.forEach((photo: any) => photos.push(this.photosPath + photo.cheminAcces));
            //Create voiture object
            voitures.push(
              new Voiture(
                voiture.id,
                voiture.titre,
                voiture.description,
                voiture.prix,
                voiture.kilometrage,
                voiture.anneeCirculation,
                photos,
                voiture.modele.nom,
                voiture.modele.marque.nom,
                voiture.typeCarburant.libelle
              )
            );
          });
          this.voitures = voitures;
          return voitures;
        },
        (e) => e
      );
  }

  getVoitureByid(id: number): Promise<Voiture> {
    return this.http.get(this.URL + 'annonces/' + id)
      .toPromise()
      .then((voiture: any) => {
        let photos: string[] =[];
        voiture.photos.forEach((photo: any) => photos.push(this.photosPath + photo.cheminAcces));
        return new Voiture(
          voiture.id,
          voiture.titre,
          voiture.description,
          voiture.prix,
          voiture.kilometrage,
          voiture.anneeCirculation,
          photos,
          voiture.modele.nom,
          voiture.modele.marque.nom,
          voiture.typeCarburant.libelle
        )
      });
  }

  postVoiture(data: Object): Promise<Voiture> {
    return this.http
      .post(this.URL, data)
      .toPromise()
      .then((data: any) => {
        let newCar = new Voiture(
          data.id,
          data.title,
          data.description,
          data.price,
          data.kilometer,
          data.year,
          data.photos,
          data.model,
          data.brand,
          data.carburant
        );
        return newCar;
      }, e => e);
  }

  getMarques(): Promise<any> {
    return this.http.get(this.URL + 'marques')
      .toPromise()
      .then((data: any) => {
        let marques: any[] = [];
        data['hydra:member'].forEach((marque:any) => {
          marques.push(marque.nom);
        })
        return marques;
      })
  }

  getModelesByMarque(marque: string): Promise<any> {
    return this.http.get(this.URL + 'modeles?marque.nom=' + marque.toLowerCase())
      .toPromise()
      .then((data: any) => {
        let modeles: any[] = [];
        data['hydra:member'].forEach((modele:any) => {
          modeles.push(modele.nom);
        })
        return modeles;
      })
  }

  getCarburants(): Promise<any> {
    return this.http.get(this.URL + 'type_carburants')
      .toPromise()
      .then((data: any) => {
        let carburants: any[] = [];
        data['hydra:member'].forEach((carburant:any) => {
          carburants.push(carburant.libelle);
        })
        return carburants;
      })
  }
}
