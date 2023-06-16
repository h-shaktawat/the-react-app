import logo from './logo.svg';
import './App.css';
import Single from './components/Single';
import { MultiOne, MultiTwo } from './components/Multi';
import ClassComponent from './components/ClassComponent';
import { useState } from 'react';

function App() {

  function InnerComponent() {
    return (
      <div>
        This is Inner component!!!
      </div>
    )
  }

  const [name, setName] = useState("Hemendra Shaktawat");

  function alertFun() {
    setName("Shaktawat Hemendra")
    alert(name);
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => alert('hello!!!')}>
          Click for Show Alert!!!
        </button>

        <ClassComponent />

        <h1>
          {name}
        </h1>

        <button onClick={alertFun}>
          Click for alert from function!!!
        </button>

      </header>

      <Single />
      <MultiOne />
      <MultiTwo />
      {InnerComponent()}
      <InnerComponent />

    </div>
  );
}

export default App;
