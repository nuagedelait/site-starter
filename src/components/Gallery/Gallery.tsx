import { urlFor } from "@/sanity/client";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { readClient } from "@/sanity/client";
import { getGallery } from "./queries";

export interface GalleryPropsType {
    reference?: string;
    images?: SanityAsset[];
}

const client = readClient();

export default async function Gallery({ reference, images }: GalleryPropsType) {

    if(!images && reference){
        images = await getGallery(reference)
    }

    if(!images){
        return null;
    }

    return (
        <ul className="grid gap-y-4 px-4">
            {images.map((image) => (
                <li key={image._key}>
                    <img src={urlFor(image).width(800).url()}></img>
                </li>
            ))}
        </ul>
    );
}
