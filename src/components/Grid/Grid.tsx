import { HigherOrderType } from "@/types";

import "@/styles/grid.css"

export default function Grid({ children }: HigherOrderType) {
    return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">{children}</ul>;
}
