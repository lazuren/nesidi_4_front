import { LayoutProps } from "./Layout.props";
import style from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
            <div className={style.wrapper}>
                <Header className={style.header}/>
                <main className={style.main}>
                {children}
                </main>
                <Footer className={style.footer}/>
            </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
