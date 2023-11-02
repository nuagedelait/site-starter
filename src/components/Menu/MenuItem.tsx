import { useState } from "react";
import Link from "next/link";
import { ColorType } from "@/types";
import { MouseEventHandler } from "react";
import SubMenu from "./SubMenu";

export interface MenuItemType {
    link?: string;
    target?: string;
    title?: string;
    _key: string;
    submenu?: {
        items: MenuItemType[];
    };
}

export interface MenuItemPropsType {
    item: MenuItemType;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    level?: number;
}

export default function MenuItem({
    item,
    onClick = undefined,
    level = undefined,
}: MenuItemPropsType) {
    const { link, target, title, submenu } = item;
    const [isHover, setIsHover] = useState(false);

    return (
        <li
            className="menu-item relative cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link
                href={link || "/"}
                target={target}
                className="relative"
                onClick={onClick ? onClick : undefined}
            >
                <span className="relative z-20">{title}</span>
            </Link>
            {submenu && submenu.items && (
                <SubMenu
                    items={submenu.items}
                    level={level}
                ></SubMenu>
            )}
        </li>
    );
}
