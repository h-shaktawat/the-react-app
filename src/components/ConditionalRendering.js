import { useState } from "react";

export function ConditionalRendering(params) {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <>
            {
                loggedIn == 1 ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>
            }
        </>
    )
}