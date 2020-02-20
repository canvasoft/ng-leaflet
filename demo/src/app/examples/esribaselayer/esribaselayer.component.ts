import { Component, OnInit } from '@angular/core';
import { ILeafletLayer, LeafletCenter, LeafletEsriBaselayer } from '@canvasoft/ng-leaflet';
import { Basemaps } from 'esri-leaflet';

@Component({
  selector: 'dm-esribaselayer-example',
  templateUrl: './esribaselayer.component.html',
  styleUrls: ['./esribaselayer.component.scss']
})
export class EsriBaselayersExampleComponent implements OnInit {
  private baseLayer: LeafletEsriBaselayer;

  layers: ILeafletLayer[];
  center = new LeafletCenter(4.624335, -74.063644, 10);

  ngOnInit(): void {
    const baseLayer = new LeafletEsriBaselayer('esriStreets', 'Esri Streets');
    this.layers = [baseLayer];
  }

  changeLayer(basemap: Basemaps): void {
    const baseLayer = new LeafletEsriBaselayer('esriBaselayer', 'Esri Baselayer', basemap);
    if(basemap === 'DarkGray') {
      console.log('[EsriBaselayersExampleComponent] - With labels')
      const labelLayer = new LeafletEsriBaselayer('esriBaselayerLabels', 'Esri Baselayer Labels', 'DarkGrayLabels');
      this.layers = [baseLayer, labelLayer];
    } else {
      this.layers = [baseLayer];
    }
  }
}
