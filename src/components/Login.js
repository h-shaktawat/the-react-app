import { useState } from "react";

export function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandel(e) {

        if(user.length < 3 || password.length < 6) {
            console.warn("Invalid Values!!!");
        } else {
            console.warn("Ready to Submit");
        }

        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;

        if (item.length < 3) {
            setUserErr(true);
            console.warn("User Invalid!!!");
        } else {
            setUserErr(false);
        }

        setUser(item);
    }

    function passwordHandler(e) {
        let item = e.target.value;

        if (item.length < 6) {
            setPassErr(true);
            console.warn("Password Invalid!!!");
        } else {
            setPassErr(false);
        }

        setPassword(item);
    }

    return (
        <>
            <h2>
                Login
            </h2>
            <form onSubmit={loginHandel}>
                <input type="text" placeholder="Enter your id" onBlur={userHandler} />
                <br />
                {userErr ? <span>User Invalid!!!</span> : ""}
                <br />
                <br />
                <input type="text" placeholder="Enter your password" onBlur={passwordHandler} />
                <br />
                {passErr ? <span>Password Invalid!!!</span> : ""}
                <br />
                <br />
                <button type="submit"> Submit </button>
            </form>
        </>
    )
}