import { PageTypes, TileTypes } from "./page.enum";
import { IUser } from "./user.interface";

export interface PageType {
    type: PageTypes;
    name: string;
    description: string;
    configKeys: PageConfigKey[];
  }
  
  export interface PageConfigKey {
    field: string;
    type: string;
  }
  
  
  export interface Page {
    name: string;
    pageType: PageType;
    createdAt: Date;
    updatedAt: Date;
    tiles: Tile[];
    createdBy: IUser;
    configs: object[];
  }
  
  export interface TileConfig {
    field: string;
    type: string;
    styles: StyleConfig[];
  }
  
  
  export interface Tile {
    name: string;
    description: string;
    styleKeys: StyleConfig[];
    tileType: TileType;
    configValues: object[];
    styles: object[];
  }
  
  export interface TileType {
    type: TileTypes;
    tileConfigs: TileConfig[];
  }
  
export interface StyleConfig {
    label: string;
    key: string;
    keyType: string;
  }
  