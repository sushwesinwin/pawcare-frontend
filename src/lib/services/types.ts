export interface Service {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    linkText: string;
}

export interface Services {
    services: Service[];
}