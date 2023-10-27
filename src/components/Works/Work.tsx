import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { getWork } from "./queries";
import { urlFor } from "@/src/sanity/client";

export interface WorkPropsType {
    slug: string;
}

export default async function Work({ slug }: WorkPropsType) {
    const document = await getWork(slug);
    if (!document) {
        return <></>;
    }

    return <div className={`works-${slug}`}>
        <div>
            <p>{document.date}</p>
            <p>{document.client?._ref}</p>
            <img src={urlFor(document.coverImage).width(200).url()}/>
        </div>
    </div>;
}
