import { Route } from '@angular/router';
import { EsriBaselayersExampleComponent } from './esribaselayer.component';

export const ESRIBASELAYER_ROUTE: Route = {
  path: 'esribaselayers',
  component: EsriBaselayersExampleComponent,
  data: {
    pageTitle: 'home.title'
  }
};
