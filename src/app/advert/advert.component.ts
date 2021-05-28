import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  @Input() public voiture!: Voiture;

  constructor() { }

  ngOnInit(): void {
  }

}
