export default function Table(props) {
	const { children, style = {}, ...datum } = props;

	return (
		<table
			style={{
				borderCollapse: "collapse",
				...style,
			}}
			{...datum}
		>
			{children}
		</table>
	);
}
