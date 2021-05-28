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
  public cars: Voiture[] = [];
  constructor(private api: ApiService) {
    this.api.getVoiture().then((res) => {
      this.cars = res;
    });
  }

  ngOnInit(): void {}
}
