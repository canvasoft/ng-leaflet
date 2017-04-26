import { ElementRef } from '@angular/core';
import { DefaultsService } from '../services/defaults.service';
import { LeafletService } from '../services/leaflet.service';
/**
 * Main ui-leaflet-ng2 component.
 *
 * <pre>
 *   <ui-leaflet></ui-leaflet>
 * </pre>
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
export declare class LeafletComponent {
    defaultsService: DefaultsService;
    private leafletService;
    mapEl: ElementRef;
    private mapReady;
    private map;
    private defaults;
    private id;
    private lfCenter;
    private layers;
    constructor(defaultsService: DefaultsService, leafletService: LeafletService);
    ngAfterViewInit(): void;
    /**
     * Get LeafletJS Map
     *
     * @return LeafletJS Map
     */
    getMap(): Promise<any>;
}
