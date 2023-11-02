"use client"

import { useCallback, useEffect, useState } from "react";
import { responsive } from "../config";

const { breakpoints } = responsive

const getBreakPoint = (width: number, initial:string = 'xs') => Object.keys(breakpoints).reduce((result, bpKey) => {
    if (width > breakpoints[bpKey]) {
        return bpKey
    } else {
        return result
    }
}, initial);

export interface WindowType {
    innerHeight: number,
    innerWidth: number,
    outerHeight: number,
    outerWidth: number,
    breakpoint: string
}

export default function useWindow(initial: string = "xs"): WindowType {

    let [result, setResult] = useState({
        innerHeight: 0,
        innerWidth: 0,
        outerHeight: 0,
        outerWidth: 0
    })

    const update = useCallback(function () {
        setResult({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        })
    }, [])

    useEffect(() => {
        update();
        window.addEventListener('resize', () => {
            update();
        })
    }, [])

    const breakpoint = getBreakPoint(result.innerWidth, initial);

    return {
        ...result,
        breakpoint
    };
}