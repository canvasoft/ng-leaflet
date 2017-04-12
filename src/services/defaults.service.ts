import { Injectable } from '@angular/core';

@Injectable()
export class DefaultsService {
  private defaults = {
    keyboard: true,
    dragging: true,
    worldCopyJump: false,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    tap: true,
    touchZoom: true,
    zoomControl: true,
    zoomsliderControl: false,
    zoomControlPosition: 'topleft',
    attributionControl: true,
    controls: {
      layers: {
        visible: true,
        position: 'topright',
        collapsed: true
      }
    },
    nominatim: {
      server: ' http://nominatim.openstreetmap.org/search'
    },
    crs: L.CRS.EPSG3857,
    tileLayer: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileLayerOptions: {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    path: {
      weight: 10,
      opacity: 1,
      color: '#0000ff'
    },
    center: {
      lat: 0,
      lng: 0,
      zoom: 1
    },
    trackResize: true
  };

  constructor() {

  }

  getDefaults() {
    return this.defaults;
  }
}
