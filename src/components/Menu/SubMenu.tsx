import MenuItem, { MenuItemType } from "./MenuItem";
import { MouseEventHandler } from "react";

export interface SubMenuPropsType {
    items: MenuItemType[];
    level?:number;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

export default function SubMenu({ items, onClick, level }: SubMenuPropsType) {
    return (
        <ul className={`submenu ${level ? `level-${level}` : ""}`}>
            {items.map((item: MenuItemType) => (
                <MenuItem
                    item={item}
                    key={item._key}
                    onClick={onClick}
                    level={level ? level+1 : undefined}
                ></MenuItem>
            ))}
        </ul>
    );
}
