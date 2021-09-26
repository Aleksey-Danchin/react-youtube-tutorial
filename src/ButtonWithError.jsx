import { useState } from "react";

const ButtonWithError = (props) => {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		throw Error(props.title);
	}

	return <button onClick={() => setHasError(true)}>{props.title}</button>;
};

export default ButtonWithError;
