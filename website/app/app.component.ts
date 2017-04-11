import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'leaflet-app',
  template:
    `
    <h3>Hello {{name}}</h3>
    <ui-leaflet>
    </ui-leaflet>
    `
})
export class AppComponent { name = 'UI Leaflet 2'; }
