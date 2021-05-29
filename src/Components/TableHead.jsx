export default function TableHead(props) {
	const { children, ...datum } = props;

	return <thead {...datum}>{children}</thead>;
}
