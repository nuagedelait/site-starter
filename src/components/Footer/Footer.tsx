import { AppSectionType } from "../App";
import { urlFor } from "@/sanity/client";

import getdata from "./queries";

import Menu from "../Menu";

export interface FooterPropsType extends AppSectionType {}

export default async function Footer(props: FooterPropsType) {
    const document = await getdata();

    if (!document) {
        return <></>;
    }

    return (
        <footer>
            {document.logo && (
                <img src={urlFor(document.logo).width(200).url()}></img>
            )}
            <Menu data={document.menu}></Menu>
        </footer>
    );
}
