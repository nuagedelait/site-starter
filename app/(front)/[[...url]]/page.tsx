import { Props } from "@/src/types";
import Page from "@/components/Page";
import { parseUrl } from "@/utils";

export default async function NextPage({
    params,
    searchParams,
}: Props) {
    const [url, slug] = parseUrl(params.url);
    return <Page slug={slug} params={searchParams}></Page>;
}
