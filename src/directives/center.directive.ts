import { Directive, ElementRef, Input, OnChanges, OnInit, Host } from '@angular/core';

import { LeafletComponent } from '../components/leaflet.component';
import { LeafletService } from '../services/leaflet.service';


/**
 * Center directive for ng-leaflet.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Directive({
  selector: '[lfCenter]',
})
export class CenterDirective implements OnInit, OnChanges {
  @Input() lfCenter: any;

  constructor(private el: ElementRef, @Host() private uiLeaflet: LeafletComponent,
    private leafletService: LeafletService) {
  }

  private changeCenter() {
    const leafletService: LeafletService = this.leafletService;
    const center = this.lfCenter;

    if (leafletService.isObject(center) && leafletService.isDefined(center.lat) &&
      leafletService.isDefined(center.lng) && leafletService.isDefined(center.zoom)) {
      this.uiLeaflet.getMap().then((map) => {
        map.setView([center.lat, center.lng], center.zoom);

        map.on('moveend', () => {
          Object.assign(center, {
            lat: map.getCenter().lat,
            lng: map.getCenter().lng,
            zoom: map.getZoom(),
            autoDiscover: false
          });
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
