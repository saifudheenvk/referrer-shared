import { PageTypes, TileTypes } from "./page.enum";
import { IUser } from "./user.interface";

export interface PageType {
    id: number;
    type: PageTypes;
    name: string;
    description: string;
    configKeys: PageConfigKey[];
  }
  
  export interface PageConfigKey {
    id: number;
    field: string;
    type: string;
  }
  
  
  export interface Page {
    id: number;
    name: string;
    pageType: PageType;
    createdAt: Date;
    updatedAt: Date;
    tiles: Tile[];
    createdBy: IUser;
    configs: object[];
  }
  
  export interface TileConfig {
    id: number;
    field: string;
    type: string;
    styles: StyleConfig[];
  }
  
  
  export interface Tile {
    id: number;
    name: string;
    description: string;
    styleKeys: StyleConfig[];
    tileType: TileType;
    configValues: object[];
    styles: object[];
  }
  
  export interface TileType {
    id: number;
    type: TileTypes;
    tileConfigs: TileConfig[];
  }
  
export interface StyleConfig {
    id: number;
    label: string;
    key: string;
    keyType: string;
  }
  