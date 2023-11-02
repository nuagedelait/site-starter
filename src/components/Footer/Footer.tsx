import { AppSectionPropsType } from "../App";
import { urlFor } from "@/sanity/client";

import getdata from "./queries";

import Menu from "../Menu";
import Contact from "../Contact/Contact";

export interface FooterPropsType extends AppSectionPropsType {}

export default async function Footer(props: FooterPropsType) {
    const document = await getdata();

    if (!document) {
        return <></>;
    }

    return (
        <footer className="flex flex-col md:flex-row w-full justify-between align-top items-stretch bg-slate-100 md:h-80">
            <Contact className="pt-8"></Contact>
            {document.menu && <Menu data={document.menu} className="flex flex-col justify-start items-center w-1/6 grow max-w-sm h-full"></Menu>}
        </footer>
    );
}
