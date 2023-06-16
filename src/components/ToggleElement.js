import { useState } from "react";

export function ToggleElement(params) {

    const [status, setStatus] = useState(true);

    return (
        <>
            {
                status ? <h1>Hemendra Singh</h1> : null
            }
            <button onClick={() => setStatus(!status)}>
                Toggle
            </button>
        </>
    )

}