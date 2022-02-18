import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: "primary" | "primaryOrange" | "primaryGreen" | "primaryYellow" | "ghost" | "ghostOrange"  | "ghostGreen" | "ghostYellow";
    size?: "s" | "m" | "l";
    block?: boolean;
}
