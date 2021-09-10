import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss'],
})
export class AdvertListComponent implements OnInit {

  public cars: Voiture[] = [];

  constructor(private api: ApiService) {
    this.api.getVoiture().then((res) => {
      this.cars = res;
      console.log(res);
    });

  }

  ngOnInit(): void {}
}
