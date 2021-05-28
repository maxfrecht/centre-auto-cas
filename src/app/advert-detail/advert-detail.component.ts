import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss'],
})
export class AdvertDetailComponent implements OnInit {
  public voiture!: Voiture;
  constructor() {}

  ngOnInit(): void {}
}
