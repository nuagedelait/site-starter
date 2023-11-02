import { SkillType } from "@/sanity/schemas/skill";
import { urlFor } from "@/sanity/client";
import Link from "next/link";
import { SanityReference } from "@sanity/image-url/lib/types/types";
import { isRef } from "@/types";
import { getSkill } from "./queries";

export interface SkillPropsType {
    item: SkillType | SanityReference;
}

export default async function Skill({ item }: SkillPropsType) {

    const document = isRef(item) ? await getSkill(item._ref) : item;

    return (
        <div>
            <Link href={document.link ? document.link : '#'}>
                <img
                    src={urlFor(document.picture).width(60).height(60).url()}
                ></img>
            </Link>
        </div>
    );
}
