import type { WorkType } from "@/sanity/schemas/work";

import { readClient } from "@/sanity/client";

const client = readClient()

export async function getWorks() {
    return await client.fetch(`*[_type=="work"]{
        "slug":slug.current,
        title,
        "image":coverImage,
        date
    }`);
}

export async function getWork(slug: string): Promise<WorkType> {
    return await client.fetch(`*[_type=="work" && slug.current=="${slug}"][0]`);
}