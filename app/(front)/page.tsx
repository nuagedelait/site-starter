import { Props } from "@/types";
import Page from "@/components/Page";
import { getPath } from "@/utils";

export default async function NextPage({ params, searchParams }: Props) {
    const [path, slug] = getPath();
    return <Page slug={slug} params={searchParams}></Page>;
}
