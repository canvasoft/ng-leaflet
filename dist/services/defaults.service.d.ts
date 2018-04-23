import { LeafletService } from './leaflet.service';
import L = require('leaflet');
/**
 * DefaultsService Class.
 * This assign or get default options for ui-leaflet-ng2 map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
export declare class DefaultsService {
    private leafletService;
    private defaultsMap;
    constructor(leafletService: LeafletService);
    /**
     * Get initial defaults.
     *
     * @returns   Initial defaults.
     */
    private _getDefaults();
    /**
     * Reset defaultsMap field.
     */
    reset(): void;
    /**
     * Get defaults for a ui-leaflet-ng2 map.
     *
     * @param scopeId   Map id. If it is null, will be setted as 'main'
     * @returns         Initial defaults.
     */
    getDefaults(scopeId?: string): any;
    /**
     * Set defaults options for a ui-leaflet-ng2 map.
     *
     * @param userDefaults   Defaults setted by the user.
     * @param scopeId        Map id. If it is null, will be setted as 'main'
     * @returns              New defaults.
     */
    setDefaults(userDefaults: any, scopeId: string): {
        keyboard: boolean;
        dragging: boolean;
        worldCopyJump: boolean;
        doubleClickZoom: boolean;
        scrollWheelZoom: boolean;
        tap: boolean;
        touchZoom: boolean;
        zoomControl: boolean;
        zoomsliderControl: boolean;
        zoomControlPosition: string;
        attributionControl: boolean;
        controls: {
            layers: {
                visible: boolean;
                position: string;
                collapsed: boolean;
            };
        };
        nominatim: {
            server: string;
        };
        crs: L.CRS;
        tileLayer: string;
        tileLayerOptions: {
            attribution: string;
        };
        path: {
            weight: number;
            opacity: number;
            color: string;
        };
        center: {
            lat: number;
            lng: number;
            zoom: number;
        };
        trackResize: boolean;
    };
    /**
     * Get creation options for LeafletJS map.
     *
     * @param scopeId   Map id. If it is null, will be setted as 'main'
     * @returns         LeafletJS map creation options.
     */
    getMapCreationDefaults(scopeId: string): any;
}
