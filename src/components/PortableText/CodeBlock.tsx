import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";

import "@/styles/prism.css"

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);

export interface CodeValue {
    value: {
        code: string;
        language: string;
    };
}

export default ({ value }: CodeValue) => {

    return (
        <Refractor
            // In this example, `props` is the value of a `code` field
            language={value.language}
            value={value.code}
        />
    );
};
