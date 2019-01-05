import { Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import * as L from 'leaflet';

import { DefaultsService } from '../services/defaults.service';
import { LeafletService } from '../services/leaflet.service';

/**
 * Main ui-leaflet-ng2 component.
 *
 * <pre>
 *   <ui-leaflet></ui-leaflet>
 * </pre>
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Component({
  // moduleId: module.id,
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
  @Input() private lfCenter: any;
  @Input() private layers: any;

  constructor(public defaultsService: DefaultsService, private leafletService: LeafletService) {
  }

  ngAfterViewInit() {
    console.log('ID', this.id);
    this.defaults = this.defaultsService.setDefaults(this.defaults, this.id);
    this.map = new L.Map(this.mapEl.nativeElement, this.defaultsService.getMapCreationDefaults(this.id));

    if (!this.layers) {
      console.log('Putting default tileLayer', this.defaults.tileLayer);
      new L.TileLayer(this.defaults.tileLayer).addTo(this.map);
    }

    if (!this.leafletService.isDefined(this.lfCenter)) {
      this.map.setView(new L.LatLng(this.defaults.center.lat, this.defaults.center.lng), this.defaults.center.zoom);
    }

    this.mapReady.emit(true);
  }

  /**
   * Get LeafletJS Map
   *
   * @return LeafletJS Map
   */
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
