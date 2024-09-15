type Props = {
	className?: string
}

const withIconHOC = (Icon: JSX.Element) => {
	const withIconHOC = (props: Props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current" {...props}>
			{Icon}
		</svg>
	);
	return withIconHOC;
};

export default withIconHOC;
