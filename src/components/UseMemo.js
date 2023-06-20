import { Button } from "react-bootstrap";
import { useState, useMemo } from "react";

function UseMemo(props) {

    const [count, setCount] = useState(1);
    const [item, setItem] = useState(2);

    const countMemo = useMemo(

        function multiCount() {
            console.log('this is count memo!!!');
            return count * 10;
        }, [count]

    );

    return (
        <>

            {/* 
                This component is for all type of functionalities in react functional component!!!
            */}

            <h2>{count}</h2>
            <br />
            <Button onClick={() => setCount(count + 1)}>Update Count!!!</Button>

            <br />
            <br />

            <h2>{item}</h2>
            <br />
            <Button onClick={() => setItem(item * 2)}>Update Count!!!</Button>

            <br />
            <br />

            <h2>{countMemo}</h2>

        </>
    );
}

export default UseMemo;