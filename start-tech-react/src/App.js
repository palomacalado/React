import logo from './logo.svg';
import './App.css';
import AppClass from './AppClass';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AppClass nome="João" idade="30"></AppClass>
      </header>
    </div>
  );
}

export default App;
