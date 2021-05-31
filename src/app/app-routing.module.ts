import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { LoginComponent } from './login/login.component';
import { VisitorContentComponent } from './visitor-content/visitor-content.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorContentComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'advert/:id',
    component: AdvertDetailComponent,
    data: { animation: 'AdvertDetailPage' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'LoginPage' },
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
