import { Component, OnInit } from '@angular/core';
import { ILeafletLayer, LeafletCenter, LeafletEsriFeatureLayer, LeafletEsriBaselayer } from '@canvasoft/ng-leaflet';
import { Util } from 'leaflet';

@Component({
  selector: 'dm-esrifeaturelayer-example',
  templateUrl: './esrifeaturelayer.component.html',
  styleUrls: ['./esrifeaturelayer.component.scss']
})
export class EsriFeaturelayersExampleComponent implements OnInit {
  layers: ILeafletLayer[];
  popupExampleLayers: ILeafletLayer[];
  center = new LeafletCenter(4.624335, -74.063644, 7);

  ngOnInit(): void {
    const baseLayer = new LeafletEsriBaselayer('esriStreets', 'Esri Streets');
    const featureLayer = new LeafletEsriFeatureLayer(
      'esriFeatureLayer',
      'Esri Feature Layer',
      'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0'
    );

    const popupBaseLayer = new LeafletEsriBaselayer('esriTopographic', 'Esri Topographic', 'Topographic');
    const popupFeatureLayer = new LeafletEsriFeatureLayer(
      'esriFeatureLayer',
      'Esri Feature Layer',
      'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0'
    );

    popupFeatureLayer.bindPopup((layer: any) => {
      return Util.template(
        '<p>Earthquake <strong>{name}</strong> occured on {mo}/{dy}/{year_}. It had a magnitude of {magnitude}.</p>',
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        layer.feature.properties
      );
    });

    this.layers = [baseLayer, featureLayer];
    this.popupExampleLayers = [popupBaseLayer, popupFeatureLayer];
  }
}
