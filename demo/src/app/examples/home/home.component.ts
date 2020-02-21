import { Component, OnInit } from '@angular/core';

import { LeafletCenter, LeafletTileLayer } from '@canvasoft/ng-leaflet';

@Component({
  selector: 'dm-home-demo',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeExampleComponent implements OnInit {
  center = new LeafletCenter(4.624335, -74.063644, 12);

  layers: LeafletTileLayer[];
  layer1: LeafletTileLayer;
  layer2: LeafletTileLayer;

  constructor() {
    this.layer1 = new LeafletTileLayer(
      'layer1',
      'Openstreet Maps',
      'tile',
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      false,
      {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );

    this.layer2 = new LeafletTileLayer(
      'layer2',
      'Open Cycle Map',
      'tile',
      'https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    );
  }

  changeCenter(city: string): void {
    switch (city) {
      case 'bogota':
        this.center = new LeafletCenter(4.624335, -74.063644, 12);
        break;
      case 'medellin':
        this.center = new LeafletCenter(6.27053, -75.57211999999998, 11);
        break;
    }
    console.log('Changing center to ' + city);
  }

  changeLayers(): void {
    this.layers = !this.layers.includes(this.layer1) ? [this.layer1] : [this.layer2];
  }

  ngOnInit(): void {
    this.layers = [this.layer1];
  }
}
