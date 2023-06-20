import { useRef } from "react";

function UseRefHook(props) {

    let inputRef = useRef(null);

    function handelInput() {
        console.log('This is handel input function!!!');

        // manipulate element using ref hook
        inputRef.current.value = 111;
        inputRef.current.focus();
        inputRef.current.style.color = "blue";
    }

    return (
        <>

            <h1>Use Ref Hook in React</h1>
            <br />
            <br />
            <input type="text" ref={inputRef} />
            <br />
            <br />
            <button onClick={handelInput}>Handel Input Using Ref Hook</button>
        </>
    );
}

export default UseRefHook;