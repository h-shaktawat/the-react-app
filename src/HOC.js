import { useState } from 'react';

function HOC() {

  return (
    <>
      <HOCRed cmp={Counter} />
      <br />
      <br />
      <HOCGreen cmp={Counter} />
    </>
  );
}

function HOCRed(props) {
  return (
    <>
      <span style={{ color: "red", width: 100 }}>
        <props.cmp />
      </span>
    </>
  )
}

function HOCGreen(props) {
  return (
    <>
      <span style={{ color: "green", width: 100 }}>
        <props.cmp />
      </span>
    </>
  )
}

function Counter() {

  const [count, setCount] = useState(1);

  return (
    <>
      <h3>{count}</h3>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Update Count
      </button>
    </>
  )

}

export default HOC;
