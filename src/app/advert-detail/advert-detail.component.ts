import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../animations/slide-in';
import { Voiture } from '../models/voiture';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AdvertDetailComponent implements OnInit {
  public voiture!: Voiture;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.voiture = this.api.voitures.find(
      (v) => v.id === this.activatedRoute.snapshot.paramMap.get('id')
    )!;
  }
}
