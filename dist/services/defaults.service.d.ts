/// <reference types="leaflet" />
export declare class DefaultsService {
    private defaults;
    constructor();
    getDefaults(): {
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
}
