import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";

export const Button = ({
    appearance = 'primary',
    size = "m",
    block,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(style.button, className, {
                [style.primary]: appearance === "primary",
                [style.primaryOrange]: appearance === "primaryOrange",
                [style.primaryGreen]: appearance === "primaryGreen",
                [style.primaryYellow]: appearance === "primaryYellow",
                [style.ghost]: appearance === "ghost",
                [style.ghostOrange]: appearance === "ghostOrange",
                [style.ghostGreen]: appearance === "ghostGreen",
                [style.ghostYellow]: appearance === "ghostYellow",
       
                [style.s]: size === "s",
                [style.m]: size === "m",
                [style.l]: size === "l",

                [style.block]: block,
            })}
            {...props}
        >
            {children}
        </button>
    );
};
