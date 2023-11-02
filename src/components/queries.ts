import type { WorkType } from "@/sanity/schemas/work";

import { readClient } from "@/sanity/client";
import { GridItemType } from "./Grid/GridItem";

const client = readClient()

export async function getDocuments(type: string): Promise<GridItemType[]> {
    return await client.fetch(`*[_type=="${type}"]{
        "id":_id,
        "slug":slug.current,
        title,
        coverImage,
        date
    } | order(date desc)`);
}

export async function getDocument(type: string, slug: string, transforms: string = ''): Promise<WorkType> {
    const query = `*[_type=="${type}" && slug.current=="${slug}"][0]{
        ...${transforms ? `,${transforms}` : ""}
    }`;
    return await client.fetch(query);
}