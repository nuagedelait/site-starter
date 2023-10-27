export type ObjType = {
    [key: string]: any
}
export type ConfigType = {
    [key: string]: string | string[] | undefined
}

export interface HigherOrderType {
    children?: ReactChildrenType
}

export type Props = {
    params: { [key:string]: string | string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}

export type PagePropsType = HigherOrderType & Props

export type ReactChildrenType = React.ReactNode | React.ReactNode[]