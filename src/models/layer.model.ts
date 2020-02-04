import { Layer, tileLayer, markerClusterGroup, MarkerClusterGroup, Marker } from 'leaflet';

export interface ILeafletLayer {
  id: string;
  name: string;
  enabled: boolean;
  isBaselayer: boolean,
  options?: any;

  getLayer(): Layer;
}

export class LeafletTileLayer implements ILeafletLayer {
  private layer: Layer;
  public enabled = true;

  constructor(
    public id: string,
    public name: string,
    public type: string,
    public url: string,
    public isBaselayer = false,
    public options?: any
  ) {
    switch(this.type) {
      case 'tile':
				this.layer = tileLayer(this.url,  this.options);
        break;

      case 'wms':
      default:
        this.layer = tileLayer.wms(this.url,  this.options);
        break;
    }
  }

  getLayer(): Layer {
    return this.layer;
  }
}

export class LeafletMarkerClusterLayer implements ILeafletLayer {
  private layer: MarkerClusterGroup;
  public enabled = true;

  constructor(
    public id: string,
    public name: string,
    public markers: Marker[] = [],
    public isBaselayer = false,
    public options?: any
  ) {
    this.layer = markerClusterGroup({ chunkedLoading: true });
    this.layer.addLayers(markers);
  }

  getLayer(): Layer {
    return this.layer;
  }

  addMarker(marker: Marker): void {
    this.markers.push(marker);
    this.layer.addLayer(marker);
  }

  setMarkers(markers: Marker[]): void {
    this.layer.clearLayers();
    this.markers = markers;
    this.layer.addLayers(markers);
  }
}
