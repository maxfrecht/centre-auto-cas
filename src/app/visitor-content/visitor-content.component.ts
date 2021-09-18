import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visitor-content',
  templateUrl: './visitor-content.component.html',
  styleUrls: ['./visitor-content.component.scss']
})
export class VisitorContentComponent implements OnInit {
  public filters: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  handleUserFilters(filters: any) {
    this.filters = filters;
  }
}
