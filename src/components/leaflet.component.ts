import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ui-leaflet',
  styles: ['.angular-leaflet-map { width: 300px; height: 300px; }'],
  template: `<div #map class="angular-leaflet-map"></div>`
})
export class LeafletComponent {
  @ViewChild('map') map:ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    new L.Map(this.map.nativeElement);
  }
}
