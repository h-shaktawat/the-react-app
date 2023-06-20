import './App.css';
import './assets/custom.css'
import style from './assets/style.module.css'

function App() {

  // Simple Array 
  const students = ['hemendra', 'divya', 'pihu'];

  // Array an Object
  const users = [
    { name: 'hemendra', email: 'hemendra@gmail.com', contact: 8003836264 },
    { name: 'divya', email: 'divya@gmail.com', contact: 9785187343 },
    { name: 'pihu', email: 'pihu@gmail.com', contact: 1234567890 }
  ]

  return (
    <div className="App">

      <h1 className='external'>
        Simple Array List
        <br />
        <br />
        {
          students.map((student) =>
            <h3>Student Name : {student}</h3>
          )
        }
      </h1>


      <br />
      <br />

      <h1 style={{ color: "red", backgroundColor: "white" }}>
        Array an Object
        <table className='table table-bordered'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
          {
            users.map((user) =>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
              </tr>
            )
          }
        </table>
      </h1>


      <br />
      <br />

      <h1 className={style.module}>
        Module Style Heading
      </h1>

    </div>
  );
}

export default App;
