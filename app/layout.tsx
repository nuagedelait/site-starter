import type { Metadata, ResolvingMetadata } from "next";
import type { Props } from "@/types";
import { getMetadata } from "@/components/Page/queries";

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
    return <html lang="en">{children}</html>;
}
