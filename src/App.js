import logo from './github-actions-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Studying Github Actions with React App...
        </p>
        <a
          className="App-link"
          href="https://docs.github.com/en/actions/get-started/understand-github-actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github actions documentation
        </a>
      </header>
    </div>
  );
}

export default App;
