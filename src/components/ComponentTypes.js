import Single from './Single';
import { MultiOne, MultiTwo } from './Multi';
import ClassComponent from './ClassComponent';
import { useState } from 'react';

function ComponentTypes() {

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

      <ClassComponent name={userName} email="hemendra@gmail.com" />

      <button onClick={alertFun}>
        Click for alert from function!!!
      </button>

      <MultiOne />

      <MultiTwo />

      {InnerComponent()}
      <InnerComponent />

      <Single name="HSS" email="hemendra@gmail.com" address={{ city: "udaipur", state: "rajasthan" }} />
      <Single name="Divya" email="divya@gmail.com" address={{ city: "pali", state: "rajasthan" }} />

    </div>
  );
}

export default ComponentTypes;
