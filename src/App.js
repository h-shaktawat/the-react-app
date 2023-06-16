import logo from './logo.svg';
import './App.css';
import Single from './components/Single';
import { MultiOne, MultiTwo } from './components/Multi';
import ClassComponent from './components/ClassComponent';

function App() {

  function InnerComponent() {
    return (
      <div>
        This is Inner component!!!
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <Single />
        <MultiOne />
        <MultiTwo />
        {InnerComponent()}
        <InnerComponent />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
