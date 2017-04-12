import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

import { DefaultsService } from '../services/defaults.service';

@Component({
  moduleId: module.id,
  selector: 'ui-leaflet',
  providers: [DefaultsService],
  styles: ['.angular-leaflet-map { width: 100%; height: 400px; }'],
  template: `<div #map class="angular-leaflet-map"></div>`
})
export class LeafletComponent {
  @ViewChild('map') mapEl:ElementRef;
  private map:any;
  private defaults:any;

  constructor(defaults:DefaultsService) {
    this.defaults = defaults.getDefaults();
  }

  ngAfterViewInit() {
    this.map = new L.Map(this.mapEl.nativeElement);

    if (!this.defaults.layers) {
      console.log('Putting default tileLayer', this.defaults.tileLayer);
      new L.TileLayer(this.defaults.tileLayer).addTo(this.map);
    }
    this.map.setView(new L.LatLng(4.624335, -74.063644), 12);
  }

  getMap() {
    return this.map;
  }
}
