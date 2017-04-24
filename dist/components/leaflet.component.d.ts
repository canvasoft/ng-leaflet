import { ElementRef } from '@angular/core';
import { DefaultsService } from '../services/defaults.service';
import { LeafletService } from '../services/leaflet.service';
export declare class LeafletComponent {
    private leafletService;
    mapEl: ElementRef;
    private mapReady;
    private map;
    private defaults;
    constructor(defaults: DefaultsService, leafletService: LeafletService);
    ngAfterViewInit(): void;
    getMap(): Promise<any>;
}
