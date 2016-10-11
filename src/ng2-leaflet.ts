import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DIRECTIVES} from './directives';
import {PIPES} from './pipes';
import {PROVIDERS} from './services';

/*
export default {
  directives: [DIRECTIVES],
  pipes: [PIPES],
  providers: [PROVIDERS]
}
*/

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  providers: PROVIDERS,
  exports: PIPES
});

export class Ng2LeafletModule { }
