declare namespace Store {
    export interface Data {
        products: Product[];
        cart: Cart;
    }



    export  interface Cart {
        items: CartItem[];
        currency: string;
    }

    export interface CartItem {
        id:number,
        count:number
    }

    export interface Product {
        id: number;
        name: string;
        price: number;
        currency: string;
        image: string;
        video: string;
    }
    }