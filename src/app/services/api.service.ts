import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL: string = 'https://127.0.0.1:8000/api/';
  private photosPath: string = '../assets/image/photos/'
  public voitures: Voiture[] = [];
  constructor(private http: HttpClient) {}

  getVoiture(args: any = []): Promise<Voiture[]> {

    let urlQuery = this.URL + 'annonces?';
    args.forEach((arg:string | []) => {
        if(args.brand) {

        }
    });
    return this.http
      .get(urlQuery)
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
