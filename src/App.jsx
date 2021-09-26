import { useState } from "react";
import Modal from "./Modal";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)}>Открыть / Закрыть</button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<P>123</P>
			</Modal>
		</>
	);
};

export default App;

const P = (props) => <p>{props.children}</p>;
