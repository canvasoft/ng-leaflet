import { Route } from '@angular/router';
import { EsriFeaturelayersExampleComponent } from './esrifeaturelayer.component';

export const ESRIFEATURELAYER_ROUTE: Route = {
  path: 'esrifeaturelayers',
  component: EsriFeaturelayersExampleComponent,
  data: {
    pageTitle: 'esri.featurelayers'
  }
};
