import { ListProps } from "./List.props";
import style from "./List.module.css";
import cn from "classnames";
import React from "react";

export const List = ({ title, ...props }: ListProps): JSX.Element => {
    return (
        <div className={style.list}>
            {title ? <h3 className={style.title}>{title}</h3> : ""}
            <ul>
                {React.Children.map(props.children, (child) => {
                    return <li>{child}</li>;
                })}
            </ul>
        </div>
    );
};
