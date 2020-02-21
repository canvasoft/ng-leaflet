import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet.component';
import { CenterDirective } from './directives/center.directive';
import { DefaultsService } from './services/defaults.service';
import { LayersDirective } from './directives/layers.directive';

export * from './components/leaflet.component';
export * from './directives/center.directive';
export * from './services/defaults.service';
export * from './models';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeafletComponent ,
    CenterDirective,
    LayersDirective,
  ],
  exports: [
    LeafletComponent,
    CenterDirective,
    LayersDirective
  ]
})
export class NgLeafletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgLeafletModule,
      providers: [DefaultsService]
    };
  }
}
