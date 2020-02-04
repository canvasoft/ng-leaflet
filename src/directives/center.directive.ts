import { Directive, ElementRef, Input, OnChanges, OnInit, Host } from '@angular/core';

import { LeafletComponent } from '../components/leaflet.component';
import { LeafletCenter } from '../models/center.model';


/**
 * Center directive for ng-leaflet.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Directive({
  selector: '[lfCenter]'
})
export class CenterDirective implements OnInit, OnChanges {
  @Input() lfCenter: LeafletCenter;

  constructor(private el: ElementRef, @Host() private uiLeaflet: LeafletComponent) {
  }

  private async changeCenter() {
    const center = this.lfCenter;

    if (this.lfCenter.isValid()) {
      const map = await this.uiLeaflet.getMap();
      map.setView([center.lat, center.lng], center.zoom);
      map.on('moveend', () => {
        Object.assign(center, {
          lat: map.getCenter().lat,
          lng: map.getCenter().lng,
          zoom: map.getZoom(),
          autoDiscover: false
        });
      });
    } else {
      console.warn('[ng-leaflet] - Center is not valid');
    }
  }

  ngOnInit() {
    console.log('Parent:', this.uiLeaflet);
    console.log('Lf Center:', this.lfCenter);
    this.changeCenter();
  }

  ngOnChanges(changes: any) {
    this.changeCenter();
  }
}
