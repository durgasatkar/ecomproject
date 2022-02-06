export interface Product{
    id?:number;
    name:string;
    description:string;
    image:string;
    price: number;
    discount: number;
    rating: number;
    quantity: number;
}

export interface Contact{
    id?:number;
    name:string;
    email:string;
    contactNo:string;
    query:string;
}