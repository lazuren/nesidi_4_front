import { HProps } from "./H.props";
import style from "./H.module.css"

export const H = ({ tag, children }: HProps): JSX.Element => {
    switch (tag) {
        case "1":
            return <h1 className={style.H1}>{children}</h1>;
        case "2":
            return <h2 className={style.H2}>{children}</h2>;
        case "3":
            return <h3 className={style.H3}>{children}</h3>;
        case "4":
            return <h4 className={style.H4}>{children}</h4>;
        default:
            return <>{children}</>;
    }
    
};
