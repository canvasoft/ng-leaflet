# ui-leaflet-ng2

## Installation

To install ui-leaflet-ng2, run:

```bash
$ npm install elesdoar/ui-leaflet-ng2#master --save
```

## Consuming your library

Once you have published your library to npm, you can import ui-leaflet-ng2 in any Angular application by running:

```bash
$ npm install elesdoar/ui-leaflet-ng2#master
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
