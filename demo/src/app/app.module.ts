import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgLeafletModule } from '@canvasoft/ng-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkerClusterExampleComponent } from './examples/markercluster/markercluster.component';
import { HomeExampleComponent } from './examples/home/home.component';
import { EsriBaselayersExampleComponent } from './examples/esribaselayer/esribaselayer.component';
import { EsriFeaturelayersExampleComponent } from './examples/esrifeaturelayer/esrifeaturelayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerClusterExampleComponent,
    EsriBaselayersExampleComponent,
    EsriFeaturelayersExampleComponent,
    HomeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLeafletModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
