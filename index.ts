import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './src/components/leaflet.component';
import { SampleDirective } from './src/directives/sample.directive';
import { SamplePipe } from './src/pipes/sample.pipe';
import { SampleService } from './src/services/sample.service';

export * from './src/components/leaflet.component';
export * from './src/directives/sample.directive';
export * from './src/pipes/sample.pipe';
export * from './src/services/sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeafletComponent ,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    LeafletComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class UiLeafletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiLeafletModule,
      providers: [SampleService]
    };
  }
}
