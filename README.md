# Angular 2 Leaflet Directive - WORK IN PROGRESS (WIP)

## Goal

[Angular 2](https://angular.io) directive for the [Leaflet](http://leafletjs.com) Javascript Library. This software aims to easily embed maps managed by Leaflet on your project.

## Master Branch State

Please note the master branch is currently in a "in-progress state" and is not suitable for production use at this point.

## Features

- [x] Map Options
- [x] Dynamic Center

## TODO

- [ ] Layers
- [ ] Markers
- [ ] GeoJSON
- [ ] Bounds
- [ ] Max Bounds
- [ ] Manage Map Events
- [ ] Legend
- [ ] Paths
- [ ] Controls

## Installation

To install ui-leaflet-ng2, run:

```bash
$ npm install angular-ui/ui-leaflet-ng2#master --save
```

## How to use it

Once you have published your library to npm, you can import ui-leaflet-ng2 in any Angular application by running:

```bash
$ npm install angular-ui/ui-leaflet-ng2#master --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { UiLeafletModule } from 'ui-leaflet-ng2';

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

![UI Leaflet for Angular 2](docs/images/ui-leaflet-ng2.png)

[https://angular-ui.github.io/ui-leaflet-ng2/docs/](https://angular-ui.github.io/ui-leaflet-ng2/docs/)

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Michael Salgado](mailto:elesdoar@gmail.com)
