import { TileTypes } from "./page.enum";


export interface ITile {
    name: string;
    description: string;
    styleKeys: IStyleConfig[];
    tileType: ITileType;
    configValues: ITileConfigValue[];
    styles: IStyleValue[];
    stylesFromType: IStyleValue[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IStyleConfig {
    label: string;
    key: string;
    keyType: string;
}

export interface IStyleValue {
    value: string;
    key: string;
}

export interface ITileType {
    type: TileTypes;
    tileConfigs: ITileConfig[];
}

export interface ITileConfig {
    field: string;
    type: string;
    styles: IStyleConfig[];
}

export interface ITileConfigValue {
    value: object;
    configKey: ITileConfig;
}

export interface ITileDocument extends ITile, Document {};
export interface ITileTypeDocument extends ITileType, Document {};
export interface ITileConfigDocument extends ITileConfig, Document {};
export interface ITileConfigValueDocument extends ITileConfigValue, Document {};
export interface IStyleConfigDocument extends IStyleConfig, Document {};
export interface IStyleValueDocument extends IStyleValue, Document {};