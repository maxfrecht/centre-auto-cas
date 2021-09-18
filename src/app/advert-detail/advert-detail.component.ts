import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../animations/slide-in';
import { Voiture } from '../models/voiture';
import { ApiService } from '../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss'],
})
export class AdvertDetailComponent implements OnInit {
  public voiture!: Voiture;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.api.getVoitureByid(parseInt(this.activatedRoute.snapshot.paramMap.get('id')!))
      .then(voiture => {
        this.voiture = voiture;
        this.spinner.hide();
      });
  }
}
