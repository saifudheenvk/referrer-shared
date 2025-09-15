

export interface IUser {
    _id: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: IUserRole;
    createdAt: Date;
    updatedAt: Date;
}


export interface IUserRole {
    id: string;
    name: string;
    type: RoleType;
    description: string;
    permissionGroups: IPermissionGroup[];
  }


  export interface IPermissionGroup {
    id: string;
    name: string;
    description: string;
    permissions: IPermission[];
  }


  export interface IPermission {
    id: string;
    authority: string;
  }

  export enum RoleType {
    SUPER_ADMIN,
    SALES_ADMIN,
    CONTENT_MANAGER,
    CONTENT_ADMIN
  }


  export interface IUserDocument {
    _id?: string;
    company?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
  }

  export interface IAuth {
    email?: string;
    password?: string;
  }
  

  export interface ICreatUserPayload {
    [key: string]: string;
    company: string;
    email: string;
    password: string;
    country: string;
  }