import { urlFor } from "@/src/sanity/client";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface GridItemType {
    slug: string;
    title: string;
    image: SanityAsset;
    date: string
}

export interface GridItemPropsType {
    item: GridItemType;
}

export default function GridItem({ item }: GridItemPropsType) {
    const { slug, title, image, date } = item;
    return (
        <li>
            <a href={`/works/${slug}`}>
                <div>
                    <img src={urlFor(image).width(200).url()} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{date}</p>
                </div>
            </a>
        </li>
    );
}
