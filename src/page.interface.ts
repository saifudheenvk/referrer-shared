import { PageTypes } from "./page.enum";
import { ITile } from "./tile.interface";
import { IUser } from "./user.interface";

export interface IPageType {
    type: PageTypes;
    name: string;
    description: string;
    configKeys: IPageConfigKey[];
  }
  
  export interface IPageConfigKey {
    field: string;
    type: string;
  }
  
  
  export interface IPage {
    name: string;
    pageType: IPageType;
    createdAt: Date;
    updatedAt: Date;
    tiles: ITile[];
    createdBy: IUser;
    configs: object[];
  }

  export interface IPageConfigValue {
    value: object;
    type: IPageConfigKey;
  }

  export interface IPageDocument extends IPage, Document {};
  export interface IPageTypeDocument extends IPageType, Document {};
  export interface IPageConfigKeyDocument extends IPageConfigKey, Document {};
  export interface IPageConfigValueDocument extends IPageConfigValue, Document {};