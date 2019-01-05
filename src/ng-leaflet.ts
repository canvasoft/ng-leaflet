import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet.component';
import { CenterDirective } from './directives/center.directive';
import { SamplePipe } from './pipes/sample.pipe';
import { DefaultsService } from './services/defaults.service';

export * from './components/leaflet.component';
export * from './directives/center.directive';
export * from './pipes/sample.pipe';
export * from './services/defaults.service';

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
export class NgLeafletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgLeafletModule,
      providers: [DefaultsService]
    };
  }
}
