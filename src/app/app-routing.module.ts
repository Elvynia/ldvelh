import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from "./page/page.component";

const routes : Routes = [
  { path: '', redirectTo: '/page/0', pathMatch: 'full' },
  { path: 'page/:id', component: PageComponent }
  //{ path: 'page', component: PageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
