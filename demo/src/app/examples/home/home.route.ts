import { Route } from '@angular/router';
import { HomeExampleComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeExampleComponent,
  data: {
    pageTitle: 'home.title'
  }
};
