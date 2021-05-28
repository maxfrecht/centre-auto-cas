import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { VisitorContentComponent } from './visitor-content/visitor-content.component';

const routes: Routes = [
  {path: '', component: VisitorContentComponent},
  {path: 'advert/:id', component: AdvertDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
