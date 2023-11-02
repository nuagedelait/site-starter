import { getWork } from "./queries";

import { isRef } from "@/types";
import Skill from "@/components/Skills";
import Gallery from "../Gallery";
import PortableText from "../PortableText/PortableText";
import Link from "next/link";

export interface WorkPropsType {
    slug: string;
}

export default async function Work({ slug }: WorkPropsType) {
    const document = await getWork(slug);
    if (!document) {
        return <></>;
    }

    return (
        <>
            <div>
                <Link href="/works">{`< all works`}</Link>
            </div>
            <div className={`works-${slug} mt-8 flex flex-col md:flex-row`}>
                <div>
                    {document.skills && (
                        <div className="mb-8">
                            <h3>Stack</h3>
                            <ul className="flex">
                                {document.skills.map((skill) => (
                                    <li
                                        key={skill.slug.current}
                                        className="w-8"
                                    >
                                        <Skill item={skill}></Skill>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="relative bg-white w-80 py-4 px-6 pb-20 mb-8 font-light text-xs">
                        <h3>Client</h3>
                        <p>
                            {isRef(document.client)
                                ? "undisclosed"
                                : document.client?.name}
                        </p>
                        <h3>Mission</h3>
                        <p>{document.mission}</p>
                        {document.tasks && (
                            <>
                                <h3>Tasks</h3>
                                <ul>
                                    {document.tasks.map((task) => (
                                        <li
                                            className="list-disc ml-4"
                                            key={task}
                                        >
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {document.notes && (
                            <PortableText
                                content={document.notes}
                                className="pt-4"
                            ></PortableText>
                        )}
                        <h3 className="pt-8">View project</h3>
                        {document.link && (
                            <Link href={document.link} target="_blank">
                                {document.link}
                            </Link>
                        )}
                    </div>
                </div>
                <div>
                    <Gallery images={document.gallery}></Gallery>
                </div>
            </div>
        </>
    );
}
