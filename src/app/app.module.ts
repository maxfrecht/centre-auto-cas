import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitorContentComponent } from './visitor-content/visitor-content.component';
import { HeroBannerComponent } from './visitor-content/hero-banner/hero-banner.component';
import { FilterBarComponent } from './visitor-content/filter-bar/filter-bar.component';
import { AdvertListComponent } from './visitor-content/advert-list/advert-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertComponent } from './advert/advert.component';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VisitorContentComponent,
    HeroBannerComponent,
    FilterBarComponent,
    AdvertListComponent,
    FooterComponent,
    AdvertComponent,
    AdvertDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
