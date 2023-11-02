import { urlFor } from "@/sanity/client";
import Link from "next/link";
import { months } from "@/config/calendar";
import { DocumentType } from "@/sanity/schemas/document";

export interface GridItemType extends DocumentType{}

export interface GridItemPropsType {
    item: GridItemType;
    category?:string
}

export default function GridItem({ item, category }: GridItemPropsType) {
    const { slug, title, coverImage, date } = item;
    const date_format = new Date(date);

    return (
        <li className="w-full flex justify-center">
            <Link
                href={`${category ? `/${category}` : ""}/${slug}`}
                className="flex flex-col justify-start items-center"
            >
                <div className="max-w-full">
                    <img src={urlFor(coverImage).width(300).height(300).url()} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="w-fit text-center max-w-full">
                        {title}
                    </h4>
                    <p className="text-xs uppercase font-light">{`${
                        months[date_format.getMonth()]
                    } ${date_format.getFullYear()}`}</p>
                </div>
            </Link>
        </li>
    );
}
