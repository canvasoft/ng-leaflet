import { Component } from '@angular/core';
import { LeafletCenter } from '@angular-ui/ng-leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-leaflet';

  name = 'UI Leaflet 2';
  center = new LeafletCenter(4.624335, -74.063644, 12);

  changeCenter(city: string) {
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
}
