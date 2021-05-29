export default function TableBody(props) {
	const { children, ...datum } = props;

	return <tbody {...datum}>{children}</tbody>;
}
