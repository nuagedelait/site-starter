import { headers } from 'next/headers'

function isMobile(agent:string) {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return agent.match(toMatchItem);
    });
}

export default function Responsive(){
    const headersList = headers();
    const agent = headersList.get('user-agent');
    const _default = 'md'

    if(!agent){
        return _default
    }

    return isMobile(agent) ? 'xs' : _default
}