import { Document, Types } from 'mongoose';

export interface IPermission {
  authority: string;
}

export interface IPermissionGroup {
  name: string;
  description: string;
  permissions: Types.ObjectId[] | IPermission[];
}

export interface IUserRole {
  name: string;
  type: RoleType;
  description: string;
  permissionGroups: Types.ObjectId[] | IPermissionGroup[];
}

export interface IUser {
  email: string;
  password?: string;
  phoneNumber: string;
  role: Types.ObjectId | IUserRole; 
  company: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

export interface IPermissionDocument extends IPermission, Document {}
export interface IPermissionGroupDocument extends IPermissionGroup, Document {
  permissions: IPermissionDocument[];
}
export interface IUserRoleDocument extends IUserRole, Document {
  permissionGroups: IPermissionGroupDocument[];
}
export interface IUserDocument extends IUser, Document {
  comparePassword(password: string): Promise<boolean>;
}

export enum RoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  SALES_ADMIN = 'SALES_ADMIN',
  CONTENT_MANAGER = 'CONTENT_MANAGER',
  CONTENT_ADMIN = 'CONTENT_ADMIN',
}


export interface IAuth {
  email: string;
  password?: string;
}

export interface ICreatUserPayload {
  company: string;
  email: string;
  password?: string;
  country: string;
  phoneNumber: string;
}