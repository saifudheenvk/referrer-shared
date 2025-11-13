import { Types } from "mongoose";
import { TileTypes } from "./page.enum";


export interface ITile {
    name: string;
    description: string;
    tileType: Types.ObjectId | ITileType;
    configValues: Types.ObjectId[] | ITileConfigValue[];
    styles: Types.ObjectId[] | IStyleValue[];
    stylesFromKeys: Types.ObjectId[] | IStyleValue[];
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
    key: Types.ObjectId | IStyleConfig;
}

export interface ITileType {
    type: TileTypes;
    tileConfigs: Types.ObjectId[] | ITileConfig[];
    name: string;
    styleKeys: Types.ObjectId[] | IStyleConfig[];
}

export interface ITileConfig {
    field: string;
    type: string;
    styles: Types.ObjectId[] | IStyleConfig[];
}

export interface ITileConfigValue {
    value: object;
    configKey: Types.ObjectId | ITileConfig;
}

export interface ITileDocument extends ITile, Document {};
export interface ITileTypeDocument extends ITileType, Document {};
export interface ITileConfigDocument extends ITileConfig, Document {};
export interface ITileConfigValueDocument extends ITileConfigValue, Document {};
export interface IStyleConfigDocument extends IStyleConfig, Document {};
export interface IStyleValueDocument extends IStyleValue, Document {};