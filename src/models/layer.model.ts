import 'leaflet.markercluster';
import { Layer, tileLayer, markerClusterGroup, MarkerClusterGroup, Marker, Content, Popup, PopupOptions } from 'leaflet';

/**
 * Base interface for Leaflet Layers.
 */
export interface ILeafletLayer {
  id: string;
  name: string;
  enabled: boolean;
  isBaselayer: boolean;
  options?: any;

  /**
   * Get leaflet layer.
   */
  getLayer(): Layer;
}

export abstract class AbstractLeafletLayer implements ILeafletLayer {
  abstract id: string;
  abstract name: string;
  abstract enabled: boolean;
  abstract isBaselayer: boolean;
  abstract options?: any;

  abstract getLayer(): Layer;

  public bindPopup(content: ((layer: Layer) => Content) | Content | Popup, options?: PopupOptions): void {
    if (this.getLayer()) {
      this.getLayer().bindPopup(content, options);
    }
  }
}

/**
 * Tilelayer from Leaflet.
 */
export class LeafletTileLayer extends AbstractLeafletLayer {
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
    super();

    switch (this.type) {
      case 'tile':
        this.layer = tileLayer(this.url,  this.options);
        break;

      case 'wms':
      default:
        this.layer = tileLayer.wms(this.url,  this.options);
        break;
    }
  }

  /**
   * @inheritdoc
   */
  getLayer(): Layer {
    return this.layer;
  }
}

/**
 * Markercluster layer from Markercluster plugin.
 */
export class LeafletMarkerClusterLayer extends AbstractLeafletLayer {
  private layer: MarkerClusterGroup;
  public enabled = true;

  constructor(
    public id: string,
    public name: string,
    public markers: Marker[] = [],
    public isBaselayer = false,
    public options?: any
  ) {
    super();
    this.layer = markerClusterGroup({ chunkedLoading: true });
    this.layer.addLayers(markers);
  }

  /**
   * @inheritdoc
   */
  getLayer(): Layer {
    return this.layer;
  }

  /**
   * Add a Marker to cluster.
   */
  addMarker(marker: Marker): void {
    this.markers.push(marker);
    this.layer.addLayer(marker);
  }

  /**
   * Set Markers to cluster.
   */
  setMarkers(markers: Marker[]): void {
    this.layer.clearLayers();
    this.markers = markers;
    this.layer.addLayers(markers);
  }
}
