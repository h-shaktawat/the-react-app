import { Component } from "react";

export default class ClassLCM extends Component {

    constructor() {
        // Run each type
        super();
        console.warn("this is constructor!!!");
    }

    componentDidMount() {
        // Run only when component call first time
        console.warn("this is componentDidMount!!!");
    }

    componentDidUpdate(preProps, preState, snapshot) {
        // Run when state and props get updated
        console.warn("this is componentDidUpdate!!!");
    }

    render() {

        // Run each type when component render
        console.warn("this is render!!!");

        return (
            <>
                <h3>Hello from Class Life Cycle Methods</h3>
            </>
        )
    }
}