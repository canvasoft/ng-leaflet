import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'leaflet-app',
  template:
    `
    <h3>Hello {{name}}</h3>
    <ui-leaflet [lfCenter]="center">
    </ui-leaflet>
    <div style="margin: 20px 0;">
      <button type='button' class="btn btn-secondary" (click) = "changeCenter('bogota')">Bogotá</button>
      <button type='button' class="btn btn-info" (click) = "changeCenter('medellin')">Medellín</button>
    </div>
    <h5>Center:</h5>
    <pre>{{center | json}}</pre>
    `
})
export class AppComponent {
  name = 'UI Leaflet 2';
  center =  {
    lat: 4.624335,
    lng: -74.063644,
    zoom: 12
  };

  changeCenter(city: string) {
    switch (city) {
      case 'bogota':
        this.center = {
          lat: 4.624335,
          lng: -74.063644,
          zoom: 12
        };
        break;
      case 'medellin':
        this.center = {
          lat: 6.27053,
          lng: -75.57211999999998,
          zoom: 11
        };
        break;
    }
    console.log('Changing center to ' + city);
  }
}
