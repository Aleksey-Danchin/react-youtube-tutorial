import PropTypes from "prop-types";

export default function UserCard(props) {
	const { user, onSendMessage, onSendInvite, ...datum } = props;

	return (
		<div
			style={{
				border: "1px solid gray",
				borderRadius: "15px",
				textAlign: "center",
				width: "300px",
				margin: "10px",
			}}
		>
			<p>
				{user.name} {user.surname}
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					margin: "10px",
				}}
			>
				<button onClick={onSendInvite}>Отправить запрос</button>
				<button onClick={onSendMessage}>Написать письмо</button>
			</div>
		</div>
	);
}

UserCard.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
	}).isRequired,
	onSendInvite: PropTypes.func.isRequired,
	onSendMessage: PropTypes.func.isRequired,
};

UserCard.defaultProps = {
	onSendInvite() {},
	onSendMessage() {},
};
