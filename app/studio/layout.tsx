import { HigherOrderType } from "@/src/types";

import "@/styles/studio.css";

export default function StudioFrontRootLayout({ children }: HigherOrderType) {
    return <body>{children}</body>;
}
