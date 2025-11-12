import { Document, Types } from "mongoose";
import { IUser } from "./user.interface";


export interface ICompany {
    name: string;
    location: string;
    owner: Types.ObjectId | IUser;
    website?: string;
    createdAt: Date;
    updatedAt: Date;
    subscriptionPlan: string;
}

export interface ICompanyDocument extends ICompany, Document {}