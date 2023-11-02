export interface InputPropsType {
    type: string;
    content?: string;
}

const defaultStyle = ' mb-2 block min-h-[auto] rounded border-2 border-gray-300 bg-transparent px-3 py-[0.32rem] leading-tight outline-1 outline-gray-600 transition-all duration-200 ease-linear w-full'

export default function Input({ type, content }: InputPropsType) {
    let component = null;
    switch (type) {
        case "text":
            component = <input type="text" placeholder={content} key={content} className={defaultStyle}></input>;
            break;
        case "email":
            component = <input type="email" placeholder={content} key={content} className={defaultStyle}></input>;
            break;
        case "textarea":
            component = <input type="textarea" placeholder={content} key={content} className={defaultStyle}></input>;
            break;
        case "submit":
            component = <input type="submit" key={content} value={content} className="hover:shadow-form mt-4 rounded-md bg-[#fdc355] px-8 py-3 text-center text-base font-semibold text-white outline-none"/>;
            break;
    }
    return component;
}
