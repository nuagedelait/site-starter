import type { Metadata, ResolvingMetadata } from "next";
import type { PagePropsType, Props } from "@/types";

import { getMetadata } from "@/src/components/Page/queries";
import { Inter } from "next/font/google";
import "@/styles/app.css";
import { getPath } from "@/utils";
import App from "@/components/App";

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const [path, slug] = getPath();
    return await getMetadata(slug);
}

const inter = Inter({ subsets: ["latin"] });

export default function GenericRootLayout({ children }: PagePropsType) {
    const [path, slug] = getPath();
    return (
        <body
            className={`${inter.className} slug-${slug}`}
        >
            <App url={path}>{children}</App>
        </body>
    );
}
