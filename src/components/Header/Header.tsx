import type { AppSectionPropsType } from "../App";
import { urlFor } from "@/sanity/client";

import getdata from "./queries";

import Menu from "../Menu";
import Contact from "../Contact";
import Responsive from "../Responsive/Client";
import SSresponsive from "../Responsive/Server";
import Link from "next/link";

export interface HeaderPropsType extends AppSectionPropsType {}

export default async function Header({ className }: HeaderPropsType) {
    const initialBreakpoint = SSresponsive();

    const document = await getdata();
    if (!document) {
        return <></>;
    }

    return (
        <header className="flex w-full p-2 md:p-8 h-head-mobile sm:h-head">
            <Menu
                data={document.menu}
                className="flex flex-col justify-center items-start w-1/6 main z-40"
                popinMode
            >
                <Contact />
            </Menu>
            <div className="flex flex-col justify-center items-center w-4/6">
                <Link href="/" className="no-underline">{document.siteTitle ? (
                    <span className="text-center lowercase text-6xl md:text-7xl xl:text-7xl font-bold leading-tight tracking-tighter">
                        <Responsive
                            initial={initialBreakpoint}
                            breakpoints={{
                                xs: document.siteTitlexs,
                            }}
                        >
                            {document.siteTitle}
                        </Responsive>
                    </span>
                ) : document.logo ? (
                    <img src={urlFor(document.logo).width(200).url()}></img>
                ) : (
                    <></>
                )}</Link>
            </div>
            <div className="flex flex-col justify-start items-end w-1/6 text-xs font-bold leading-tight tracking-tighter">
                <Responsive
                    initial={initialBreakpoint}
                    breakpoints={{
                        xs: (
                            <img
                                className="rounded-full h-5/6"
                                src={urlFor(document.logo).width(200).url()}
                            ></img>
                        ),
                    }}
                >
                    {document.baseline.split("\n").map((line: string) => (
                        <span key={line}>{line}</span>
                    ))}
                </Responsive>
            </div>
        </header>
    );
}
