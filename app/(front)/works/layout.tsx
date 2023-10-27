import type { HigherOrderType } from "@/types";

import App from "@/components/App";

export default function WorksRootLayout({ children }: HigherOrderType) {
    return <App url={['works']}>{children}</App>;
}
