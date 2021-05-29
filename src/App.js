import { useEffect, useRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./Components";

function App(prop) {
	const ref = useRef();

	useEffect(() => {
		console.log(ref.current);
	}, []);

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell ref={ref}>id</TableCell>
					<TableCell>Имя</TableCell>
					<TableCell>Фамилия</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell onClick={() => console.log("Алексей")}>
						Алексей
					</TableCell>
					<TableCell>Данчин</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>2</TableCell>
					<TableCell>Сергей</TableCell>
					<TableCell>Воронин</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>3</TableCell>
					<TableCell>Дмитрий</TableCell>
					<TableCell>Злов</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export default App;
