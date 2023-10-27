import { HigherOrderType } from "@/src/types";

import "@/styles/studio.css";

export default function StudioFrontRootLayout({ children }: HigherOrderType) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
