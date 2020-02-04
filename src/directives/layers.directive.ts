import { Directive, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, IterableDiffer, Input, NgZone, Host, IterableDiffers, AfterViewInit } from '@angular/core';
import { ILeafletLayer } from '../models';
import { LeafletComponent } from '../components/leaflet.component';
import { isNullOrUndefined } from 'util';
import { Layer } from 'leaflet';

/**
 * Layers directive for ng-leaflet.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Directive({
  selector: '[lfLayers]'
})
export class LayersDirective implements OnInit, OnDestroy, DoCheck {
  // Array of configured layers
  @Input('lfLayers')
  layers: Array<ILeafletLayer>;

  private lysDiffer: IterableDiffer<ILeafletLayer>;

  constructor(@Host() private uiLeaflet: LeafletComponent, private differs: IterableDiffers, private zone: NgZone) {
  }

  ngOnInit(): void {
    this.lysDiffer = this.differs.find([]).create<ILeafletLayer>(null);
    console.log('Init layers', this.layers);
    this.addLayers(this.layers);
  }

  ngOnDestroy(): void {
    this.layers = [];
  }

  ngDoCheck(): void {
    this.updateLayers();
  }

  private async updateLayers() {
    if(!isNullOrUndefined(this.lysDiffer)) {
      const changes = this.lysDiffer.diff(this.layers);
      if(isNullOrUndefined(changes)) {
        return;
      }
      console.log('Updating layers: ', changes);

      this.zone.runOutsideAngular(async () => {
        const map = await this.uiLeaflet.getMap();

        if(isNullOrUndefined(map)) {
          return;
        }

        changes.forEachRemovedItem((ly) => {
          map.removeLayer(ly.item.getLayer());
        });

        changes.forEachAddedItem((ly) => {
          map.addLayer(ly.item.getLayer());
        });
      });
    }
  }

  private async addLayers(layers: ILeafletLayer[]) {
    this.zone.runOutsideAngular(async () => {
      const map = await this.uiLeaflet.getMap();

      if(isNullOrUndefined(layers)) {
        return;
      }

      if(layers.length > 0) {
        map.eachLayer((ly: Layer) => {
          ly.remove();
        });
      }

      layers.forEach((ly) => {
        map.addLayer(ly.getLayer());
      });
    });
  }
}
