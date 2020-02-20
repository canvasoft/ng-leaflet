import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLeafletModule } from '@canvasoft/ng-leaflet';
import { MarkerClusterExampleComponent } from './examples/markercluster/markercluster.component';
import { HomeExampleComponent } from './examples/home/home.component';
import { EsriBaselayersExampleComponent } from './examples/esribaselayer/esribaselayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerClusterExampleComponent,
    EsriBaselayersExampleComponent,
    HomeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
