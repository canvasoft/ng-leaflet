import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MARKERCLUSTER_ROUTE } from './examples/markercluster/markercluster.route';
import { HOME_ROUTE } from './examples/home/home.route';
import { ESRIBASELAYER_ROUTE } from './examples/esribaselayer/esribaselayer.route';
import { ESRIFEATURELAYER_ROUTE } from './examples/esrifeaturelayer/esrifeaturelayer.route';

const routes: Routes = [
  HOME_ROUTE,
  MARKERCLUSTER_ROUTE,
  ESRIBASELAYER_ROUTE,
  ESRIFEATURELAYER_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
