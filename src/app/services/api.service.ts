import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL: string = 'http://random.com/';
  public voitures: Voiture[] = [];
  constructor(private http: HttpClient) {}

  getVoiture(): Promise<Voiture[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(
        (data: any) => {
          let voitures: Voiture[] = [];
          data.forEach((voiture: any) => {
            voitures.push(
              new Voiture(
                voiture.id,
                voiture.title,
                voiture.description,
                voiture.price,
                voiture.kilometer,
                voiture.year,
                voiture.photos,
                voiture.model,
                voiture.brand,
                voiture.carburant
              )
            );
          });
          this.voitures = voitures;
          return voitures;
        },
        (e) => e
      );
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
}
