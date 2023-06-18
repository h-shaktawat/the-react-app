import './App.css';
import ClassLCM from './components/ClassLSM';

function App() {

  function getMessage() {
    alert("Hii from App Component!!!");
  }

  return (
    <div className="App">
      <ClassLCM />
    </div>
  );
}

export default App;
