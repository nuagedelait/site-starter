import { ConfigType, HigherOrderType } from "@/types";
import { getData } from "./queries";

interface Page extends HigherOrderType {
    slug: string | undefined;
    type?: string;
    params?: ConfigType;
    className?:string
}

export default async function Page({ slug, params, children, type, className }: Page) {
    let pageTitle,
        pageDescription,
        pageSections = undefined;

    if (slug) {
        const document = await getData(slug, type);
        if (document) {
            pageTitle = document.title;
            pageSections = document.sections;
            pageDescription = document.description;
        }
    }

    return (
        <div className={`page slug-${slug ? slug : ""} p-8 ${className}`}>
            <div>
                {pageTitle && <h1>{pageTitle}</h1>}
                {pageDescription && <p className="description text-xl font-bold py-6">{pageDescription}</p>}
            </div>
            {children}
        </div>
    );
}
