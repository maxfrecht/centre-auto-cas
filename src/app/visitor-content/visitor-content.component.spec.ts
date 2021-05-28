import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorContentComponent } from './visitor-content.component';

describe('VisitorContentComponent', () => {
  let component: VisitorContentComponent;
  let fixture: ComponentFixture<VisitorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
