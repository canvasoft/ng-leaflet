import { Route } from '@angular/router';
import { MarkerClusterExampleComponent } from './markercluster.component';

export const MARKERCLUSTER_ROUTE: Route = {
  path: 'markercluster',
  component: MarkerClusterExampleComponent,
  data: {
    pageTitle: 'home.title'
  }
};
