import type { Metadata, ResolvingMetadata } from "next";
import type { Props } from "@/types";
import { getMetadata } from "@/src/components/Page/queries";

import "@/styles/globals.css";

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return await getMetadata();
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
