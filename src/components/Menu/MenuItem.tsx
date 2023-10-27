
export interface MenuItemType {
    link?: string;
    target?: string;
    title?: string;
}

export interface MenuItemPropsType {
    item: MenuItemType
}

export default function MenuItem({ item }: MenuItemPropsType) {

    const { link, target, title } = item;

    return <li>{title}</li>;
}
