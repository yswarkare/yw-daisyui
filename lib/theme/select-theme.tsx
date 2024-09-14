import { useEffect, useState } from 'react';

type Props = {
	themes?: string[];
};

const SelectTheme = ({ themes = ['light', 'dark'] }: Props) => {
	const [selected, setSelected] = useState('');

	useEffect(() => {
		//* Change the icons inside the button based on previous settings
		const theme = localStorage.getItem('color-theme');
		console.log(theme);
		if (theme || (!('color-theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches)) {
			if (theme) {
				setSelected(theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
		} else {
			setSelected('dark');
		}
	}, []);

	const onChangeTheme = (theme = '') => {
		//* if set via local storage previously
		const prevTheme = localStorage.getItem('color-theme');
		if (prevTheme) {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('color-theme', theme);
			setSelected(theme);
			//* if NOT set via local storage previously
		} else {
			const prevTheme = document.documentElement.getAttribute('data-theme');
			if (prevTheme) {
				localStorage.setItem('color-theme', prevTheme);
				setSelected(prevTheme);
			} else {
				document.documentElement.setAttribute('data-theme', theme);
				localStorage.setItem('color-theme', theme);
				setSelected(theme);
			}
		}
	};

	return (
		<label className="px-2 flex flex-row gap-2">
			<span>Theme</span>
			<select title="theme" value={selected} onChange={(e) => onChangeTheme(e.target.value)}>
				{themes.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</label>
	);
};

export default SelectTheme;
