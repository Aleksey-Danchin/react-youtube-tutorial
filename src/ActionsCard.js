import React from "react";

import ActionCard from "./ActionCard";

export default function ActionsCard(props) {
	return (
		<div className="card">
			<div className="d-flex flex-row justify-content-center">
				<ActionCard number={1} />
				<ActionCard number={3} />
				<ActionCard number={5} />
				<ActionCard number={20} />
			</div>
		</div>
	);
}
