import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MARKERCLUSTER_ROUTE } from './examples/markercluster/markercluster.route';
import { HOME_ROUTE } from './examples/home/home.route';

const routes: Routes = [HOME_ROUTE, MARKERCLUSTER_ROUTE];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
