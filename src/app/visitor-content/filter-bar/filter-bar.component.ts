import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NouisliderComponent } from 'ng2-nouislider';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  //Manage collapse functionality
  isCollapsed=true;

  //noUiSliders configurations
  rangeYearConfig: any = {
    step: 1,
    range: {
      min: 1990,
      max: 2021
    },
    margin: 1,
    tooltips: true
  }
  rangeKmConfig: any = {
    step: 5000,
    range: {
      min: 10000,
      max: 500000
    },
    margin: 5000,
    tooltips: true
  }
  rangePriceConfig: any = {
    step: 1000,
    range: {
      min: 1000,
      max: 200000
    },
    margin: 1000,
    tooltips: true
  }
  @Output() public filters: EventEmitter<any> = new EventEmitter;
  public marques : string[] = [];
  public modeles : string[] = [];
  public typeCarburant: string[] = [];

  public form: FormGroup = this.fb.group({
    brand: [''],
    modele: [''],
    typeCarburant : [''],
    rangeYear: [[1990, 2021]],
    rangeKm: [[1000, 500000]],
    rangePrix : [[1000, 200000]]
  });
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.apiService.getMarques().then( res => {
      this.marques = res;
    })
    this.apiService.getCarburants()
      .then( res => {
        this.typeCarburant = res;
      })
  }

  ngOnInit(): void {
  }

  getModelsBySelectedBrand($brand: any) {
    this.modeles = [];
    this.apiService.getModelesByMarque($brand)
      .then(res => {
        this.modeles = res;
      })
  }

  submit() {
    this.filters.emit(this.form.value);
    this.isCollapsed=true;
  }
}
