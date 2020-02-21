import { isNullOrUndefined } from 'util';

/**
 * Interface for Leaflet Center.
 */
export interface ILeafletCenter {
  lat: number;
  lng: number;
  zoom?: number;
  autoDiscover?: boolean;
}

/**
 * Center class for Leaflet
 */
export class LeafletCenter implements ILeafletCenter {
  constructor(
    public lat: number,
    public lng: number,
    public zoom: number = 4,
    public autoDiscover: boolean = false
  ) {}

  /**
   * Get if center is valid.
   *
   * @returns True if center is valid.
   */
  public isValid(): boolean {
    return !(isNullOrUndefined(this.lat) || isNullOrUndefined(this.lng) || isNullOrUndefined(this.zoom));
  }
}
