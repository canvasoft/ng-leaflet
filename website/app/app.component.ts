import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'leaflet-app',
  template:
    `
    <h3>Hello {{name}}</h3>
    <ui-leaflet [lfCenter]="center">
    </ui-leaflet>
    `
})
export class AppComponent {
  name = 'UI Leaflet 2';
  center =  {
    lat: 4.624335,
    lng: -74.063644,
    zoom: 3
  };
}
