import './App.css';
import TestComponent from './components/TestComponent';

function App() {

  function parentAlert(data) {
    alert(data);
  }

  return (
    <div className="App">
      <h1>Lifting State Up !!!</h1>
      <br />
      <br />
      <TestComponent alert={parentAlert} />
    </div>
  );
}

export default App;
