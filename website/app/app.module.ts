import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UiLeafletModule } from 'ui-leaflet-ng2';

@NgModule({
  imports:      [ BrowserModule, UiLeafletModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
