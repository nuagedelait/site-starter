import { readClient } from "@/sanity/client"
import { SanityAsset } from "@sanity/image-url/lib/types/types";

const client = readClient();

export async function getGallery(id: string): Promise<SanityAsset[]> {
    const query = `*[_type=="gallery && _id=="${id}"]`;
    return await client.fetch(query)
}