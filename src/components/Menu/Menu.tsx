"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "@sanity/icons";

import MenuItem, { MenuItemPropsType, MenuItemType } from "./MenuItem";

interface MenuPropsType {
    data?: {
        items?: Array<MenuItemType>;
    };
}

export default function Menu({ data }: MenuPropsType) {
    const [isOpen, setIsOpen] = useState(false);

    if (!data) {
        return <></>;
    }
    if (!data.items) {
        return <></>;
    }

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            {isOpen && (
                <ul>
                    {data.items.map((item: MenuItemType) => (
                        <MenuItem item={item}></MenuItem>
                    ))}
                </ul>
            )}
        </div>
    );
}
