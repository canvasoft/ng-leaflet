import { Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import * as L from 'leaflet';

import { DefaultsService } from '../services/defaults.service';
import { LeafletService } from '../services/leaflet.service';

@Component({
  moduleId: module.id,
  selector: 'ui-leaflet',
  providers: [DefaultsService, LeafletService],
  styles: ['.angular-leaflet-map { width: 100%; height: 400px; margin-top: 10px; }'],
  template: `<div #map class="angular-leaflet-map"></div>`
})
export class LeafletComponent {
  @ViewChild('map') mapEl:ElementRef;
  private mapReady: EventEmitter<any> = new EventEmitter(true);

  private map: any;
  @Input() private defaults: any;
  @Input() private id: string;

  constructor(private defaultsService:DefaultsService, private leafletService: LeafletService) {
    // console.log('Lf Center in component:', this.lfCenter);
  }

  ngAfterViewInit() {
    this.defaults = this.defaultsService.setDefaults(this.defaults, this.id);
    console.log('New defaults:', this.defaults);
    this.map = new L.Map(this.mapEl.nativeElement, this.defaultsService.getMapCreationDefaults(this.id));

    if (!this.defaults.layers) {
      console.log('Putting default tileLayer', this.defaults.tileLayer);
      new L.TileLayer(this.defaults.tileLayer).addTo(this.map);
    }
    this.map.setView(new L.LatLng(this.defaults.center.lat, this.defaults.center.lng), this.defaults.center.zoom);

    this.map.whenReady(() => {
      this.mapReady.emit(true);
    });
  }

  getMap() {
    return new Promise<any>((resolve) => {
      if (this.map) {
        resolve(this.map);
      } else {
        this.mapReady.subscribe(() => {
          resolve(this.map);
        });
      }
    });
  }
}
