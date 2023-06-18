import { useState, useEffect } from "react";

export function UseEffectComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('this is use effect hook');
    })

    return (
        <>
            <h2>Use Effect Component</h2>
            <br />
            <h2>{count}</h2>
            <br />
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </>
    )
}