import { Directive, ElementRef, Input, OnInit, Host } from '@angular/core';

import { LeafletComponent } from '../components/leaflet.component';
import { LeafletService } from '../services/leaflet.service';

@Directive({
  selector: '[lfCenter]'
})
export class CenterDirective implements OnInit {
  @Input() lfCenter: any;

  constructor(private el: ElementRef, @Host() private uiLeaflet:LeafletComponent,
    private leafletService: LeafletService) {
  }

  ngOnInit() {
    console.log('Parent:', this.uiLeaflet);
    console.log('Lf Center asdas:', this.lfCenter);
    const leafletService: LeafletService = this.leafletService;
    let center = this.lfCenter;

    if (leafletService.isObject(center) && leafletService.isDefined(center.lat) &&
      leafletService.isDefined(center.lng) && leafletService.isDefined(center.zoom)) {
      this.uiLeaflet.getMap().then((map) => {
        map.setView([center.lat, center.lng], center.zoom);
      });
    } else {
      console.warn('[ui-leaflet-ng2] - Center is not valid');
    }
  }
}
