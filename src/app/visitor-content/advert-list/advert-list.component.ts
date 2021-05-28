import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss'],
})
export class AdvertListComponent implements OnInit {
  public images: string[] = [
    '../assets/image/car1.jpg',
    '../assets/image/car2.jpg',
    '../assets/image/car3.jpg',
    '../assets/image/car4.jpg',
  ];
  public cars: Voiture[] = [
    new Voiture(
      '123',
      'Porsche seconde main',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non mauris augue sed varius. Justo nulla varius adipiscing malesuada aenean. Suspendisse fermentum pellentesque augue dui.',
      5000,
      257056,
      2014,
      this.images,
      '2000',
      'Porsche',
      'Essence'
    ),
    new Voiture(
      '456',
      'Audi 5 portes',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non mauris augue sed varius. Justo nulla varius adipiscing malesuada aenean. Suspendisse fermentum pellentesque augue dui.',
      14600,
      152456,
      2009,
      this.images,
      'TT',
      'Audi',
      'Diesel'
    ),
    new Voiture(
      '789',
      'Alfa - Urgent',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non mauris augue sed varius. Justo nulla varius adipiscing malesuada aenean. Suspendisse fermentum pellentesque augue dui.',
      3000,
      82500,
      2001,
      this.images,
      '150V',
      'Alfa Romeo',
      'Essence'
    ),
    new Voiture(
      'azer',
      'Chevrolet - état neuf',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non mauris augue sed varius. Justo nulla varius adipiscing malesuada aenean. Suspendisse fermentum pellentesque augue dui.',
      35000,
      25500,
      2019,
      this.images,
      '150V',
      'Chevrolet',
      'Diesel'
    ),
  ];
  constructor(private api: ApiService) {
    this.api.getVoiture().then((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
