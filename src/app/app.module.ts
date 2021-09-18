import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollTopBtnComponent } from './scroll-top-btn/scroll-top-btn.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from "@auth0/angular-jwt";
import { NouisliderModule } from 'ng2-nouislider';
import { NgxSpinnerModule } from "ngx-spinner";

registerLocaleData(localeFr);
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
    AdvertDetailComponent,
    ScrollTopBtnComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("access_token"),
        allowedDomains: ["localhost:8000"],
      },
    }),
    ReactiveFormsModule,
    NouisliderModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
