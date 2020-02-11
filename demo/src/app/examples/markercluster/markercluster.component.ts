import { Component, OnInit } from '@angular/core';
import { addressPoints } from './realworld.10000';
import { LeafletMarkerClusterLayer, LeafletTileLayer, ILeafletLayer, LeafletCenter } from '@canvasoft/ng-leaflet';
import { Marker, LatLng } from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'dm-markercluster-example',
  templateUrl: './markercluster.component.html',
  styleUrls: ['./markercluster.component.scss']
})
export class MarkerClusterExampleComponent implements OnInit {
  private clusterLayer: LeafletMarkerClusterLayer;
  layers: ILeafletLayer[];
  center = new LeafletCenter(-37.89, 175.46, 12);

  ngOnInit(): void {
    const markers = [];

    const baseLayer = new LeafletTileLayer(
      'layer1',
      'Openstreet Maps',
      'tile',
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      false,
      {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );

    for (let i = 0; i < addressPoints.length; i++) {
      const a = addressPoints[i];
      const title = a[2];
      const marker = new Marker(new LatLng(a[0] as number, a[1] as number), { title: title as string });
      marker.bindPopup(title as string);
      markers.push(marker);
    }
    this.clusterLayer = new LeafletMarkerClusterLayer(
      'markercluster',
      'Marker Cluster Layer',
      markers
    );

    this.layers = [baseLayer, this.clusterLayer];
  }
}
