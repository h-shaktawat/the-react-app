import { Component, createRef } from "react";

export default class RefClassComponent extends Component {

    constructor() {
        super();

        // This ref for manipulate input elements
        this.inputRef = createRef();
    }

    componentDidMount() {
        console.log("Input Value :: ", this.inputRef.current.value = "1000");
    }

    getValue() {
        console.log("Update Input Value :: ", this.inputRef.current.value);

        // Change property using ref functionality!!!
        this.inputRef.current.style.color = "red";
    }

    render() {
        return (
            <>
                {/* 
                    This component is for all type of functionalities in react class component!!!
                */}

                <h3>This is Class Component</h3>

                <input type="text" ref={this.inputRef} />
                <br />
                <br />
                <button onClick={() => this.getValue()} >Check Ref</button>
            </>
        )
    }
}