import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="happiness" />
        </main>
        <footer className="App-footer">
          This project was coded by{' '}
          <a
            href="https://github.com/gosiast"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Malgorzata Stano{' '}
          </a>
          and is
          <a
            href="https://github.com/gosiast/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            open sourced{' '}
          </a>{' '}
        </footer>
      </div>
    </div>
  );
}

export default App;
