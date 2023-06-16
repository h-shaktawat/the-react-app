import { useState } from "react";

export function BasicForm() {

    const [name, setName] = useState("");
    const [interest, setInterest] = useState("");
    const [tnc, setTnc] = useState(false);

    function getFormData(e) {
        console.log(name, tnc, interest);
        e.preventDefault();
    }

    return (
        <>

            <h2>Handle Form In React</h2>
            <form onSubmit={getFormData}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>First</option>
                    <option>Second</option>
                </select>
                <br />
                <br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept T&C</span>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}