import { FooterProps } from "./Footer.props";
import style from "./Footer.module.css";
import { format } from "date-fns";
import cn from "classnames";
import { List } from "../../components";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, style.footer)} {...props}>
            <div className={style.info}>
                <div className="block1">
                    <List title="Контакты">
                        <a href="#">Ваши товары на Nesidi</a>
                        <a href="#">Реферальная программа</a>
                        <a href="#">Установите постамат Nesidi Box</a>
                        <a href="#">Откройте пункт выдачи Nesidi</a>
                        <a href="#">Стать Поставщиком Nesidi</a>
                        <a href="#">Что продавать на Nesidi</a>
                    </List>
                </div>
                <div className="block2">
                <List title="Информация">
                        <a href="#">Ваши товары на Nesidi</a>
                        <a href="#">Реферальная программа</a>
                        <a href="#">Установите постамат Nesidi Box</a>
                     
                    </List>
                </div>
                <div className="block3">
                <List title="Помощь">
                        <a href="#">Ваши товары на Nesidi</a>
                        <a href="#">Реферальная программа</a>
                        
                    </List>
                </div>
            </div>
            <div className={style.primaryLine}>
                <div className={style.copyright}>
                    © 2017 – {format(new Date(), "yyyy")} ИП Лазуренко Елена
                    Андреевна.
                </div>
                <div className={style.dev}>
                    <a
                        href="http://lazuren.ru"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Dev by lazuren
                    </a>
                </div>
            </div>
        </footer>
    );
};
