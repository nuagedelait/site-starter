import { SanityReference } from "next-sanity"

export type ObjType = {
    [key: string]: any
}
export type ConfigType = {
    [key: string]: string | string[] | undefined
}

export interface HigherOrderType {
    children?: ReactChildrenType
    className?: string
}

export type Props = {
    params: { [key: string]: string | string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}

export type PagePropsType = HigherOrderType & Props

export type ReactChildrenType = React.ReactNode | React.ReactNode[]

export interface ColorType {
    hex: string,
    hsv: { h: number, a: number, s: number, v: number },
    rgb: { g: number, a: number, b: number, r: number },
    hsl: { l: number, a: number, s: number, h: number },
    alpha: number,
}

export function isRef(document: SanityReference | any): document is SanityReference {
    return document._ref !== undefined;
}