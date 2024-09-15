type Props = {
    className?: string;
};
declare const withIconHOC: (Icon: JSX.Element) => (props: Props) => import("react").JSX.Element;
export default withIconHOC;
