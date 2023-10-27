import type { AppSectionType } from "../App";

import getdata from "./queries";

import Menu from "../Menu";
import { urlFor } from "@/src/sanity/client";

export interface HeaderPropsType extends AppSectionType {}

export default async function Header(props: HeaderPropsType) {
    const document = await getdata();
    if (!document) {
        return <></>;
    }

    return (
        <header>
            <Menu data={document.menu}></Menu>
            {document.siteTitle ? (
                <span>{document.siteTitle}</span>
            ) : document.logo ? (
                <img src={urlFor(document.logo).width(200).url()}></img>
            ) : (
                <></>
            )}
            <div>{document.baseline}</div>
        </header>
    );
}
