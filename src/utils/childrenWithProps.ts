import {
    ReactChildrenType,
    ObjType,
} from '@/types'

import { cloneElement, isValidElement } from "react";

export default function childrenWithProps(children: ReactChildrenType, props: ObjType) {
    if (Array.isArray(children)) {
        return children.map((child: any) => cloneElement(child, props));
    } else if (isValidElement(children)) {
        return cloneElement(children, props)
    } else {
        return children
    }
}