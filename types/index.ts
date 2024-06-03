export interface CustomButtonProps {
    text: string;
    onClick: () => void;
    outline?: boolean;
    normal?: boolean;
}

export interface SimDealProps {
    isWork: boolean;
    logo: string;
    productImage: string;
    type: string;
    simCount: number;
    price: number;
}

export interface SliderImageData {
    id: number;
    image: string;
}

export interface RouterImageData {
    id: number;
    mainImage: string;
    thumbnailImage: string;
}