
export interface IregisterUser {
    login: string;
    password: string;
}

export interface IUser {
    id?: any;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    login: string;
    firstName: string;
    lastName: string;
    email?: string;
    activated: boolean;
    langKey: string;
    password: string;
    ImageUrl?: string;
    ActivationKey?: string;
    ResetKey?: string;
    // resetDate: Date;
    authorities?: string[];
}