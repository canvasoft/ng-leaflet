# Angular Leaflet for NG2

![Angular Leaflet for NG2](https://cdn.rawgit.com/angular-ui/ui-leaflet-ng2/master/logo.svg)

Angular 2 component for Leaflet 1.x (WIP - HELP WANTED)

## Goal

The idea is to make a library to integrate with angular 1.x leaflet 2, using components written in typescript, based on [ui-leaflet](https://github.com/angular-ui/ui-leaflet).

This requires a lot of work, for this reason we hope to create a community of developers who want to contribute from the definition to implementation of code, documentation, testing, etc.

We would be grateful for all the help that is given to us in this project.

## Roadmap

- [ ] Definition of structure, design and implementation.
- [ ] Leaflet component.
- [ ] Map options.
- [ ] Support multiple layers types.
- [ ] Support leaflet vector layers.
- [ ] Create plugins system for integration with leaflet plugins.
- [ ] Documentation.
- [ ] Website.

Architecture:

* [Leaflet 1.x](http://leafletjs.com/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Webpack](http://webpack.github.io/docs/)
* [Angular 2](https://angular.io/)

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
