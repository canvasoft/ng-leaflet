/**
 * Helpers for ui-leaflet-ng2 map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
export declare class LeafletService {
    /**
     * Check if an object is defined.
     *
     * @param object    A object.
     * @returns         true if the object is defined.
     */
    isDefined(object: any): boolean;
    /**
     * Check if object param is an object.
     *
     * @param object    Any.
     * @returns         true if the param is defined and object.
     */
    isObject(object: any): boolean;
    /**
     * Get effective map ID.
     *
     * @param d    Defaults from defaults service.
     * @returns    Map ID.
     */
    obtainEffectiveMapId(d: any, mapId: string): string;
}
