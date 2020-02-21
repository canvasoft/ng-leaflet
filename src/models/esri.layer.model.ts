import { ILeafletLayer, AbstractLeafletLayer } from './layer.model';
import { BasemapLayer, Basemaps, FeatureLayer, FeatureLayerOptions, StyleCallback } from 'esri-leaflet';
import { Layer } from 'leaflet';

/**
 * Baselayer from ESRI Leaflet.
 */
export class LeafletEsriBaselayer implements ILeafletLayer {
  private layer: BasemapLayer;
  public enabled = true;
  public isBaselayer = true;

  constructor(
    public id: string,
    public name: string,
    public basemap: Basemaps = 'Streets',
    public options?: any
  ) {
    this.layer = new BasemapLayer(this.basemap);
  }

  /**
   * @inheritdoc
   */
  getLayer(): Layer {
    return this.layer;
  }
}

/**
 * FeatureLayer from ESRI Leaflet.
 */
export class LeafletEsriFeatureLayer extends AbstractLeafletLayer {
  private layer: FeatureLayer;
  public enabled = true;

  constructor(
    public id: string,
    public name: string,
    public url: string,
    public isBaselayer = false,
    public options?: FeatureLayerOptions
  ) {
    super();
    this.layer = new FeatureLayer({
      url: this.url,
      ...this.options
    });
  }

  /**
   * @inheritdoc
   */
  getLayer(): Layer {
    return this.layer;
  }

  /**
   * Sets the given path options to each layer that has a setStyle method. Can also be a Function that will
   * receive a feature argument and should return Path Options
   *
   * `featureLayer.setStyle({ color: 'white' })`
   * `featureLayer.setStyle(function(feature){ return { weight: feature.properties.pixelWidth };})`
   *
   * @see FeatureLayer.setStyle
   */
  setStyle(style: L.PathOptions | StyleCallback): void {
    if(this.layer) {
      this.layer.setStyle(style);
    }
  }

  /**
   * Changes the style on a specfic feature.
   *
   * @see FeatureLayer.setFeatureStyle
   */
  setFeatureStyle(id: string | number, style: L.PathOptions | StyleCallback): void {
    if(this.layer) {
      this.layer.setFeatureStyle(id, style);
    }
  }
}
