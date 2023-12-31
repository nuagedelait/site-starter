import { readClient } from "@/sanity/client";

const client = readClient()

export default async function getData(){

    const query = `*[_type=="footer"][0]`;
    const document = await client.fetch(query);

    return document;
}