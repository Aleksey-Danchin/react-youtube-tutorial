import PropTypes from "prop-types";
import { forwardRef } from "react";

const TableCell = forwardRef((props, ref) => {
	const { children, onClick, style = {}, ...datum } = props;

	return (
		<td
			ref={ref}
			style={{
				border: "1px solid gray",
				padding: "10px",
				textAlign: "center",
				...style,
			}}
			{...datum}
			onClick={onClick}
		>
			{children}
		</td>
	);
});

TableCell.displayName = "TableCell";

export default TableCell;

TableCell.propTypes = {
	onClick: PropTypes.func.isRequired,
};

TableCell.defaultProps = {
	onClick() {},
};
