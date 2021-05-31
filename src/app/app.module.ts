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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockInterceptor } from './interceptors/http-mock.interceptor';
import { ScrollTopBtnComponent } from './scroll-top-btn/scroll-top-btn.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpMockInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
