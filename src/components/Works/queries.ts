import type { WorkType } from "@/sanity/schemas/work";

import { getDocument, getDocuments } from "../queries";

export async function getWorks() {
    return await getDocuments('work');
}

export async function getWork(slug: string): Promise<WorkType> {

    const transforms = `
    "client":client->,
    "skills":skills[]->`

    return await getDocument('work', slug, transforms);
}