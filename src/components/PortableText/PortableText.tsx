'use client'
import { PortableText as PT } from "@portabletext/react";
import components from './components'

export interface PortableTextPropsType {
    content: any[];
    className?: string;
}

export default function PortableText({
    content,
    className,
}: PortableTextPropsType) {
    return (
        <div className={`${className}`}>
            <PT value={content} components={components}></PT>
        </div>
    );
}
