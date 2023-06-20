import { useRef } from 'react';
import './App.css';
import ForwardRefHook from './components/ForwardRefHook';

function App() {

  let inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value = 1000;
  }

  return (
    <div className="App">
      <h1>forward Ref Hook in Functional Component !!!</h1>
      <br />
      <br />
      <ForwardRefHook ref={inputRef} />
      <br />
      <br />
      <button onClick={updateInput}>Update Child Component Input Using Forward Ref</button>
    </div>
  );
}

export default App;
