import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css";

const modalRootElement = document.querySelector("#modal");

const Modal = (props) => {
	const { open, onClose } = props;

	const element = useMemo(() => document.createElement("div"), []);

	useEffect(() => {
		if (open) {
			modalRootElement.appendChild(element);

			return () => {
				modalRootElement.removeChild(element);
			};
		}
	});

	if (open) {
		return createPortal(
			<div className={style.modal_background} onClick={onClose}>
				<div className={style.modal_card}>{props.children}</div>
			</div>,
			element
		);
	}

	return null;
};

export default Modal;
