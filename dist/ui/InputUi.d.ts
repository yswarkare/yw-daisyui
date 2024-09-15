import { ChangeEventHandler, MouseEventHandler } from 'react';
type Props = {
    label?: string;
    type: string;
    position?: string;
    id?: string;
    onClick?: MouseEventHandler;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    error?: string;
};
declare const InputUi: ({ label, type, position, id, onClick, onChange, error, ...props }: Props) => import("react").JSX.Element;
export default InputUi;
