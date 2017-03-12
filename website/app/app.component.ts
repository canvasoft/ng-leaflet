import { Component } from '@angular/core';

@Component({
  selector: 'leaflet-app',
  template:
    `
    <h3>Hello aaa{{name}}</h3>
    <ui-leaflet>
    </ui-leaflet>
    `
})
export class AppComponent { name = 'UI Leaflet'; }
