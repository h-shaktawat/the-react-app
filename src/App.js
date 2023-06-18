import './App.css';
import './assets/custom.css'
import style from './assets/style.module.css'

function App() {
  return (
    <div className="App">

      <h1 className='external'>
        External Style Heading
      </h1>

      <h1 style={{ color: "red", backgroundColor: "blue" }}>
        Inline Style Heading
      </h1>

      <h1 className={style.module}>
        Module Style Heading
      </h1>
      
    </div>
  );
}

export default App;
