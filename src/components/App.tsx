import { HigherOrderType } from "../types";
import Header from "./Header";
import Footer from "./Footer";

export interface AppPropsType extends HigherOrderType {
    url: string[];
}

export interface AppSectionType {
    url: string[];
}

export default ({ children, url }: AppPropsType) => {
    return (
        <>
            <Header url={url} />
            <main className={`main-${url.length > 0 ? url.join("-") : "home"}`}>
                {children}
            </main>
            <Footer url={url} />
        </>
    );
};
