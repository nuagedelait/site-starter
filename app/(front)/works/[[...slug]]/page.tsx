import type { Metadata, ResolvingMetadata } from "next";
import type { Props } from "@/types";

import { getMetadata } from "@/components/Page/queries";
import Page from "@/components/Page";
import { Work, Works } from "@/components/Works";

import "@/styles/works.css"

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug: string | undefined = params.slug
        ? Array.isArray(params.slug)
            ? params.slug[0]
            : params.slug
        : "works";
    return await getMetadata(slug, slug === "works" ? "page" : "work");
}

export default async function NextPage({ params, searchParams }: Props) {
    const slug: string | undefined = params.slug
        ? Array.isArray(params.slug)
            ? params.slug[0]
            : params.slug
        : "works";

    return (
        <Page
            slug={params.slug ? slug : `works`}
            type={params.slug ? "work" : "page"}
            className={params.slug ? "document" : "grid"}
        >
            {params.slug ? <Work slug={slug}></Work> : <Works></Works>}
        </Page>
    );
}
