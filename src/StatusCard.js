import React, { useContext } from "react";
import Context from "./Context";

export default function StatusCard(props) {
	const value = useContext(Context);

	return (
		<div className="card m-2">
			<div className="card-footer">
				<h3 className="card-title">Итого</h3>
			</div>
			<div className="card-body">
				<p>Всего куплено {value.counter} книг.</p>
			</div>
		</div>
	);
}
