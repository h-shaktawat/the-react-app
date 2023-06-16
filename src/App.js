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

  const [userName, setName] = useState("Hemendra Shaktawat");

  function alertFun() {
    setName("Shaktawat Hemendra")
    alert(userName);
  }

  return (
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <Single name={userName} email="hemendra@gmail.com" address={{ city: "udaipur", state: "rajasthan" }} />
        <Single name="Divya" email="divya@gmail.com" address={{ city: "pali", state: "rajasthan" }} />

      </header>

      <h1>
        {userName}
      </h1>

      <button onClick={alertFun}>
        Click for alert from function!!!
      </button>

      <MultiOne />

      <MultiTwo />

      {InnerComponent()}
      <InnerComponent />

      <ClassComponent />

    </div>
  );
}

export default App;
