import type { Metadata } from "next";
import { defaultTitle, defaultDescription } from "@/config";
import { readClient } from "@/sanity/client";

const client = readClient()

export async function getMetadata(slug: string | undefined = undefined, type: string = 'page'): Promise<Metadata> {

    const metadata = {
        title: defaultTitle,
        description: defaultDescription
    }

    if (!slug) {
        return metadata
    }

    const query = `*[_type=="${type}" && slug.current=="${slug}"][0]{
        title,
        description
    }`;
    
    const document = await client.fetch(query);

    if (document) {
        metadata.title = document.title
        metadata.description = document.description
    }

    return metadata
}

export async function getTitle(slug: string, type: string = 'page'): Promise<string> {
    const query = `*[_type=="${type}" && slug.current=="${slug}"][0].title`;
    return await client.fetch(query);
}

export async function getData(slug: string, type: string = 'page'): Promise<any> {
    const query = `*[_type=="${type}" && slug.current=="${slug}"][0]{
        title, description, content
    }`;
    return await client.fetch(query);
}
