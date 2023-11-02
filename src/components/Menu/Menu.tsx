"use client";

import { useState } from "react";
import { HigherOrderType } from "@/types";
import { MenuIcon, CollapseIcon } from "../icons";
import { MenuItemType } from "./MenuItem";

import "@/styles/menu.css";
import SubMenu from "./SubMenu";

interface MenuPropsType extends HigherOrderType {
    data?: {
        items?: Array<MenuItemType>;
    };
    popinMode?: boolean;
}

export default function Menu({
    data,
    children,
    className,
    popinMode,
}: MenuPropsType) {
    const [isOpen, setIsOpen] = useState(false);

    if (!data) {
        return <></>;
    }
    if (!data.items) {
        return <></>;
    }

    const iconsClass = "w-12 h-12 stroke-2";

    const submenu = data && data.items && (
        <SubMenu
            items={data.items}
            onClick={() => {
                setIsOpen(false);
            }}
            level={1}
        ></SubMenu>
    );

    return (
        <div
            className={`menu state-${isOpen ? "open" : "closed"} ${className}`}
        >
            {!popinMode && (
                <div
                    className={`submenu-level-0`}
                >
                    {submenu}
                    {children}
                </div>
            )}
            {popinMode && isOpen && (
                <div
                    className={`popin ${
                        isOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                >
                    <div className="content">
                        {submenu}
                        {children}
                    </div>
                </div>
            )}
            {popinMode && (
                <div
                    className="bg-transparent cursor-pointer z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <CollapseIcon className={iconsClass} />
                    ) : (
                        <MenuIcon className={iconsClass} />
                    )}
                </div>
            )}
        </div>
    );
}
