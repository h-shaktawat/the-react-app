import './App.css';
import { User } from './components/User';

function App() {

  function getMessage() {
    alert("Hii from App Component!!!");
  }

  return (
    <div className="App">
      <User appFun={getMessage} />
    </div>
  );
}

export default App;
