import { Injectable } from '@angular/core';
import { LeafletService } from './leaflet.service';
import L = require('leaflet');

/**
 * DefaultsService Class.
 * This assign or get default options for ui-leaflet-ng2 map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Injectable()
export class DefaultsService {
  private defaultsMap = {};

  constructor(private leafletService: LeafletService) {

  }

  /**
   * Get initial defaults.
   *
   * @returns   Initial defaults.
   */
  private _getDefaults() {
    return {
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
  }

  /**
   * Reset defaultsMap field.
   */
  reset() {
    this.defaultsMap = {};
  }

  /**
   * Get defaults for a ui-leaflet-ng2 map.
   *
   * @param scopeId   Map id. If it is null, will be setted as 'main'
   * @returns         Initial defaults.
   */
  getDefaults(scopeId:string = null) {
    let mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
    return this.defaultsMap[mapId];
  }

  /**
   * Set defaults options for a ui-leaflet-ng2 map.
   *
   * @param userDefaults   Defaults setted by the user.
   * @param scopeId        Map id. If it is null, will be setted as 'main'
   * @returns              New defaults.
   */
  setDefaults(userDefaults:any, scopeId:string) {
    let newDefaults = this._getDefaults();
    const isDefined = this.leafletService.isDefined;

    if (isDefined(userDefaults)) {
      Object.assign(newDefaults, userDefaults);
    }

    const mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
    this.defaultsMap[mapId] = newDefaults;
    return newDefaults;
  }

  /**
   * Get creation options for LeafletJS map.
   *
   * @param scopeId   Map id. If it is null, will be setted as 'main'
   * @returns         LeafletJS map creation options.
   */
  getMapCreationDefaults(scopeId:string) {
    const mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
    const d = this.defaultsMap[mapId];
    const isDefined = this.leafletService.isDefined;

    let mapDefaults = <any>{
      maxZoom: d.maxZoom,
      keyboard: d.keyboard,
      dragging: d.dragging,
      zoomControl: d.zoomControl,
      doubleClickZoom: d.doubleClickZoom,
      scrollWheelZoom: d.scrollWheelZoom,
      tap: d.tap,
      touchZoom: d.touchZoom,
      attributionControl: d.attributionControl,
      worldCopyJump: d.worldCopyJump,
      crs: d.crs,
      trackResize: d.trackResize,
    };

    if (isDefined(d.minZoom)) {
      mapDefaults.minZoom = d.minZoom;
    }

    if (isDefined(d.zoomAnimation)) {
      mapDefaults.zoomAnimation = d.zoomAnimation;
    }

    if (isDefined(d.fadeAnimation)) {
      mapDefaults.fadeAnimation = d.fadeAnimation;
    }

    if (isDefined(d.markerZoomAnimation)) {
      mapDefaults.markerZoomAnimation = d.markerZoomAnimation;
    }

    if (d.map && Object.keys(d.map).length > 0) {
      for (let option of Object.keys(d.map)) {
        mapDefaults[option] = d.map[option];
      }
    }

    return mapDefaults;
  }
}
