import { useEffect } from "react";

export default function useOne(callback) {
	useEffect(() => callback(), []);
}
