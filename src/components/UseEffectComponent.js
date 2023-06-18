import { useState, useEffect } from "react";

export function UseEffectComponent() {

    const [count, setCount] = useState(0);
    const [num, setNumber] = useState(0);

    useEffect(() => {
        console.log('this is use effect hook for count state only!!!');
    }, [count]) // pass props.propsName as parameter if need to call hook on specific props

    useEffect(() => {
        console.log('this is use effect hook for num state only!!!');
    }, [num])

    return (
        <>
            <h2>Use Effect Component</h2>
            <br />
            <h2> Count : {count}</h2>
            <br />
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <br />
            <h2> Number : {num}</h2>
            <br />
            <button onClick={() => setNumber(num + 10)}>Increase Number</button>
        </>
    )
}