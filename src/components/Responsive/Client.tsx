"use client";

import type { ReactChildrenType } from "@/types";
import childrenWithProps from "@/utils/childrenWithProps";

import useWindow from "@/hooks/useWindow";

export interface ResponsivePropsType {
    children?: ReactChildrenType | Function;
    breakpoints?: {
        [bk: string]: ReactChildrenType;
    };
    initial:string
}

export default function Responsive({
    children,
    breakpoints,
    initial
}: ResponsivePropsType) {

    const { breakpoint } = useWindow(initial);

    let defaultComponent = null;

    if (typeof children === "function") {
        defaultComponent = children(breakpoint);
    } else if (children) {
        defaultComponent = <>{childrenWithProps(children, { breakpoint })}</>;
    }

    if (breakpoints && breakpoints[breakpoint] !== undefined) {
        return breakpoints[breakpoint];
    } else {
        return defaultComponent;
    }
}
