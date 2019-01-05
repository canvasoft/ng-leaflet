import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-leaflet';

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
