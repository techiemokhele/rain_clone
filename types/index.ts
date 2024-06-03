export interface CustomButtonProps {
    text: string;
    onClick: () => void;
    outline?: boolean;
    normal?: boolean;
}

export interface RouterImageData {
    id: number;
    mainImage: string;
    thumbnailImage: string;
}