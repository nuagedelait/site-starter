import { HigherOrderType, ReactChildrenType } from "@/types";
import Form from "../Form";
import { formConfigType } from "../Form/Form";

const formConfig: formConfigType = {
    action: "/api/contact",
    method: "post",
    inputs: [
        {
            type: "text",
            content: "full name",
        },
        {
            type: "text",
            content: "email",
        },
        {
            type: "text",
            content: "message",
        },
        {
            type: "submit",
            content: "Send",
        },
    ],
};

export interface ContactPropsType {
    className?: string;
}

export default function Contact({ className }: ContactPropsType) {
    return (
        <div className={`z-10 border-t-2 sm:border-t-0 flex flex-col justify-center ${className ? className : ""}`}>
            <p className="text-4xl font-bold text-center tracking-tighter">
                Contact :)
            </p>
            <Form formConfig={formConfig}></Form>
        </div>
    );
}
