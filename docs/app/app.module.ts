import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { UiLeafletModule } from 'ui-leaflet-ng2';

@NgModule({
  imports:      [ BrowserModule, UiLeafletModule, NgbModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
