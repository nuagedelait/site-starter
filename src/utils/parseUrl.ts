export default function (url: string | string[] | undefined): [string[], string] {
    const parsedUrl: string[] = url
        ? Array.isArray(url)
            ? url
            : [url]
        : [];
    const slug = parsedUrl[parsedUrl.length - 1] ? parsedUrl[parsedUrl.length - 1] : 'home'

    return [parsedUrl, slug];
}