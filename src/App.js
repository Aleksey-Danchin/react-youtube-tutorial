import ButtonWithError from "./ButtonWithError";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
	return (
		<>
			<ErrorBoundary
				errorHandler={(error, errorInfo) => <p>{error.message}</p>}
			>
				<ButtonWithError title="Кнопка 1" />
			</ErrorBoundary>

			<ErrorBoundary
				errorHandler={(error, errorInfo) => <p>{error.message}</p>}
			>
				<ButtonWithError title="Кнопка 2" />
			</ErrorBoundary>

			<ErrorBoundary
				errorHandler={(error, errorInfo) => <p>{error.message}</p>}
			>
				<ButtonWithError title="Кнопка 3" />
			</ErrorBoundary>
		</>
	);
};

export default App;
