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
  public showFilters: boolean = false;

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
      this.showFilters = this.filters.brand || this.filters.modele || this.filters.typeCarburant || (this.filters.rangeKm && (this.filters.rangeKm[0] != 10000 || this.filters.rangeKm[1] != 500000)) || (this.filters.rangeYear && (this.filters.rangeYear[0] != 1990 || this.filters.rangeYear[1] != 2021)) || (this.filters.rangePrix && (this.filters.rangePrix[0] != 1000 || this.filters.rangePrix[1] != 200000))
    })
  }
}
