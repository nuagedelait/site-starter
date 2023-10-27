import type { Metadata, ResolvingMetadata } from "next";
import type { PagePropsType, Props } from "@/types";

import { getMetadata } from "@/src/components/Page/queries";
import { childrenWithProps, parseUrl } from "@/utils";
import App from "@/components/App";

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const [url, slug]: [string[], string] = parseUrl(params.url);
    return await getMetadata(slug);
}

export default function GenericRootLayout({
    children,
    params,
    searchParams,
}: PagePropsType) {
    const [url, slug]: [string[], string] = parseUrl(params.url);

    return (
        <App url={url}>
            {childrenWithProps(children, {
                url,
                params,
                searchParams,
                slug,
            })}
        </App>
    );
}
