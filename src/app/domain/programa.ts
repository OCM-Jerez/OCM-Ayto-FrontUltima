// https://app.quicktype.io/
// http://json2ts.com/

// export interface Programa {
//     id: string;
//     createdBy: string;
//     createdDate: Date;
//     lastUpdatedBy: string;
//     lastUpdatedDate: Date;
//     codPro: string;
//     descripcionAyto?: any;
//     descripcionOCM: string;
//     WebOCM?: any;
//     proCreatedDate?: any;
//     proDeletedDate?: any;
//     uso?: any;
//     observaciones?: any;
//     codOrg?: any;
// }




export interface Programa {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}
