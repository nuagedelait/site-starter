import Input, { InputPropsType } from "./Input";

export interface formConfigType {
    action: string;
    method: "get" | "post";
    inputs: InputPropsType[];
}

export interface FormPropsType {
    formConfig: formConfigType;
    className?:string
}

export default async function Form({ formConfig, className }: FormPropsType) {
    const { action, method, inputs } = formConfig;
    return (
        <form action={action} method={method} className={`w-full p-8 flex flex-col justify-start items-stretch ${className}`}>
            {inputs.map((input: InputPropsType) => Input(input))}
        </form>
    );
}
