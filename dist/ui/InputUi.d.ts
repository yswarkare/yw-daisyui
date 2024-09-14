import { ChangeEventHandler } from 'react';
declare const InputUi: ({ type, position, id, onClick, onChange, ...props }: {
    type: string;
    position?: string;
    id?: string;
    onClick?: any;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}) => import("react").JSX.Element;
export default InputUi;
