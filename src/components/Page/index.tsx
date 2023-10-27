import { ConfigType, HigherOrderType } from "@/types";
import { getData } from "./queries";

interface Page extends HigherOrderType {
    slug: string | undefined;
    type?: string;
    params?: ConfigType;
}

export default async function ({ slug, params, children, type }: Page) {
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
        <div className={`page-${slug ? slug : ""}`}>
            <div>
                {pageTitle && <h1>{pageTitle}</h1>}
                {pageDescription && <p>{pageDescription}</p>}
            </div>
            {children}
        </div>
    );
}
