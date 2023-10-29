import { headers } from 'next/headers'

export default function getPath(): [string[], string] {
    const headersList = headers();
    const activePath = headersList.get("x-pathname");
    const path = activePath && activePath !== '/' ? activePath.slice(1).split('/') : [];
    return [path, path.length > 0 ? path[path.length - 1] : 'home'];
}