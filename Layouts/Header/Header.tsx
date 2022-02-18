import { HeaderProps } from "./Header.props";
import style from "./Header.module.css";
import cn from "classnames";
import { Icons } from "../../components";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <header {...props}>
            <div className={style.wrapper}>
                <div className={style.topLine_BG}>
                    <div className={style.topLine}>
                        <div className={style.location}>
                            <p onClick={(i) => console.log(i)}>
                                <Icons icon="map-marker-alt" size="10px" />{" "}
                                Санкт - Питербург
                            </p>
                        </div>
                        <div className={style.links}>Link Link Link Link</div>
                    </div>
                </div>
                <div className={style.logoSerachContact_BG}>
                    Логотип поиск контакты
                </div>
                <div className={style.primaryLine_BG}>Каталог</div>
            </div>
        </header>
    );
};
