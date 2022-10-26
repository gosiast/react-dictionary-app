import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header"></header>
				<main>
					<Dictionary defaultKeyword="happiness"/>
				</main>
				<footer className="App-footer">
					<small>Coded by Malgorzata Stano</small>
				</footer>
			</div>
		</div>
	);
}

export default App;
