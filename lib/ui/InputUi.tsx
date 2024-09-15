import { ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from 'react';
import { KeyIcon, UserIcon, EmailIcon, SearchIcon } from '../icons/input-ui-icons';

const InputIcon = ({ type }: { type: string }) => {
	switch (type) {
		case 'search':
			return <SearchIcon />;
		case 'email':
			return <EmailIcon />;
		case 'username':
			return <UserIcon />;
		case 'password':
			return <KeyIcon />;
		default:
			return null;
	}
};

type Props = {
	label?: string;
	type: string;
	position?: string;
	id?: string;
	onClick?: MouseEventHandler;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	error?: string;
};

const InputUi = ({ label, type, position, id, onClick, onChange, error, ...props }: Props) => {
	const [inType, setInType] = useState(type);

	const inputTypes = ['text', 'email', 'password'];

	const changeIcon = (e: MouseEvent<HTMLDivElement>) => {
		if (onClick) onClick(e);
		if (type === 'password') {
			setInType(inType === 'password' ? 'text' : 'password');
		}
	};

	return (
		<div className="w-full flex flex-col items-start">
			{label && <p className="w-full text-left">{label}</p>}
			<label className="w-full input input-bordered flex items-center gap-2">
				{position === 'left' && (
					<div onClick={(e) => changeIcon(e)}>
						<InputIcon type={type} />
					</div>
				)}
				<input
					type={inputTypes.includes(type) ? type : 'text'}
					title={id}
					id={id}
					className="grow"
					placeholder={type}
					onChange={onChange}
					{...props}
				/>
				{position === 'right' && (
					<div onClick={(e) => changeIcon(e)}>
						<InputIcon type={type} />
					</div>
				)}
			</label>
			{error && <p className="w-full text-left text-red-500 text-sm">{error}</p>}
		</div>
	);
};

export default InputUi;
