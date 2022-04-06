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

export interface CartItem{
    product: Product;
    qty: number;
}

export interface OrderDetail {
    id: number;
    name: string;
    price: number;
    discount: number;
    quantity: number;
    created_at: Date;
    updated_at: Date;
}

export interface Address {
    id: number;
    name: string;
    addressType: string;
    addrLine1: string;
    addrLine2: string;
    area: string;
    landmark: string;
    city: string;
    pin: string;
}

export interface User {
    id: number;
    name: string;
    mobile: string;
    role?: number;
    password?: string;
}

export interface Order {
    id: number;
    status: number;
    orderType: string;
    orderAmount: number;
    created_at: Date;
    updated_at: Date;
    orderDetails: OrderDetail[];
    address: Address;
    user: User;
}