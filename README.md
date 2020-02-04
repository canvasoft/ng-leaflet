# Angular 2 Leaflet Directive - WORK IN PROGRESS (WIP)

## Goal

[Angular 2](https://angular.io) directive for the [Leaflet](http://leafletjs.com) Javascript Library. This software aims to easily embed maps managed by Leaflet on your project.

## Master Branch State

Please note the master branch is currently in a "in-progress state" and is not suitable for production use at this point.

## Features

- [x] Map Options
- [x] Layers
- [x] Dynamic Center
- [x] Markercluster

## TODO

- [ ] Markers
- [ ] GeoJSON
- [ ] Bounds
- [ ] Max Bounds
- [ ] Manage Map Events
- [ ] Legend
- [ ] Paths
- [ ] Controls

## Installation

To install ng-leaflet, run:

```bash
$ npm install angular-ui/ng-leaflet#master --save
```

## How to use it

Once you have published your library to npm, you can import ng-leaflet in any Angular application by running:

```bash
$ npm install angular-ui/ng-leaflet#master --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { UiLeafletModule } from 'ng-leaflet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiLeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ui-leaflet></ui-leaflet>
```

## Documentation:

![UI Leaflet for Angular 2](demo/src/assets/images/ui-leaflet-ng2.png)

[Demo](https://angular-ui.github.io/ng-leaflet/demo/dist/)

## License

MIT © [Michael Salgado](mailto:elesdoar@gmail.com)
