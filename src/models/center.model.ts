import { isNullOrUndefined } from 'util';

export interface ILeafletCenter {
  lat: number;
  lng: number;
  zoom?: number;
  autoDiscover?: boolean
}

export class LeafletCenter implements ILeafletCenter {
  constructor(
    public lat: number,
    public lng: number,
    public zoom: number = 4,
    public autoDiscover: boolean = false
  ) {}

  public isValid(): boolean {
    return !(isNullOrUndefined(this.lat) || isNullOrUndefined(this.lng) || isNullOrUndefined(this.zoom));
  }
}
