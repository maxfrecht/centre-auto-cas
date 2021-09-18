import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Voiture} from 'src/app/models/voiture';
import {ApiService} from 'src/app/services/api.service';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss'],
})
export class AdvertListComponent implements OnInit, OnChanges {

  public cars: Voiture[] = [];
  @Input() public filters: any;

  constructor(private api: ApiService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.api.getVoiture(this.filters).then((res) => {
      this.cars = res;
      this.spinner.hide();
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.spinner.show();
    this.api.getVoiture(this.filters).then(res => {
      this.cars = res;
      this.spinner.hide();
    })
  }
}
