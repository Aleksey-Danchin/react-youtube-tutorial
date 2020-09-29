import React, { useState } from "react";

import CitiesList from "./CitiesList";
import City from "./City";

function App() {
	const [cities, setCities] = useState([
		{ name: "Москва", description: "Столица России" },
		{ name: "Зеленоград", description: "Научный спутник Москвы" },
	]);

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlerChangeCity = (n, description) => {
		setCities(
			cities.map((city, index) => {
				if (index === n) {
					return {
						...city,
						description,
					};
				}

				return city;
			})
		);
	};

	const handlerSelectCity = (n) => setCurrentIndex(n);

	return (
		<div>
			<City
				cities={cities}
				onChangeCity={handlerChangeCity}
				currentIndex={currentIndex}
			/>
			<CitiesList cities={cities} onSelectCity={handlerSelectCity} />
		</div>
	);
}

export default App;
