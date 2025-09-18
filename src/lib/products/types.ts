export interface Product {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    href: string;
}

export interface Products {
    products: Product[];
}