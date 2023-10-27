import { readClient } from "@/src/sanity/client";

const client = readClient();

export default async function getData(){

    const query = `*[_type=="header"][0]`;
    const document = await client.fetch(query);

    return document;
}