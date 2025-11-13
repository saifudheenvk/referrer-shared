import { Types } from "mongoose";
import { PageTypes } from "./page.enum";
import { ITile } from "./tile.interface";

export interface IPageType {
    type: PageTypes;
    name: string;
    description: string;
    configKeys: Types.ObjectId[] | IPageConfigKey[];
  }
  
  export interface IPageConfigKey {
    field: string;
    type: string;
  }
  
  
  export interface IPage {
    name: string;
    pageType: Types.ObjectId | IPageType;
    createdAt: Date;
    updatedAt: Date;
    tiles: Types.ObjectId[] | ITile[];
    createdBy: string;
    configs: Types.ObjectId[] | IPageConfigValue[];
  }

  export interface IPageConfigValue {
    value: object;
    type: Types.ObjectId | IPageConfigKey;
  }

  export interface IPageDocument extends IPage, Document {};
  export interface IPageTypeDocument extends IPageType, Document {};
  export interface IPageConfigKeyDocument extends IPageConfigKey, Document {};
  export interface IPageConfigValueDocument extends IPageConfigValue, Document {};