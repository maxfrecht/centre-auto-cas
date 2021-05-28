import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorContentComponent } from './visitor-content/visitor-content.component';

const routes: Routes = [
  {path: '', component: VisitorContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
