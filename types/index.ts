//auth props
export interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export interface ForgotPasswordProps {
    setShowForgotPassword: (show: boolean) => void;
}

//in-app props
export interface CustomButtonProps {
    text: string;
    onClick?: () => void;
    outline?: boolean;
    normal?: boolean;
    hover?: boolean;
    type: "button" | "submit"
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

export interface RouterOptionProps {
    adOneImage: string;
    adTwoImage: string;
}

export interface MobileSimProps {
    isWork: boolean;
    startingText: string;
    endingText: string;
    simCount: number;
    image: string;
}

export interface RainGoProps {
    isWork: boolean;
    text: string;
    endingText: string;
    image: string;
}

export interface RouterImageData {
    id: number;
    mainImage: string;
    thumbnailImage: string;
}

export type NestedAnswer = {
    nested_question: string;
    nested_info?: string;
    nested_answers: string[];
};

export type FAQ = {
    id: number;
    question: string;
    answers: (string | NestedAnswer)[];
};