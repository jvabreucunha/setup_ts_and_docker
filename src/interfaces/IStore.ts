import { Point, MultiPolygon } from 'geojson';

export interface IStore {
  id: number;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: MultiPolygon;
  address: Point;
}
