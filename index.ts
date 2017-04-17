import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './src/components/leaflet.component';
import { CenterDirective } from './src/directives/center.directive';
import { SamplePipe } from './src/pipes/sample.pipe';
import { DefaultsService } from './src/services/defaults.service';

export * from './src/components/leaflet.component';
export * from './src/directives/center.directive';
export * from './src/pipes/sample.pipe';
export * from './src/services/defaults.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeafletComponent ,
    CenterDirective,
    SamplePipe
  ],
  exports: [
    LeafletComponent,
    CenterDirective,
    SamplePipe
  ]
})
export class UiLeafletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiLeafletModule,
      providers: [DefaultsService]
    };
  }
}
