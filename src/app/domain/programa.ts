// https://app.quicktype.io/
// http://json2ts.com/
export interface IPrograma {
    id: number;
    codPro: string;
    descripcionAyto?: string;
    descripcionOCM: string;
    WebOCM?: string;
    proCreatedDate?: Date;
    proDeletedDate?: Date;
    uso?: string;
    codOrg?: string;
    observaciones?: string;
}

export type ISavePrograma = Omit<IPrograma, 'id'>
