import { Component } from "react";

export default class ClassLCM extends Component {

    constructor() {
        // Run each type
        super();

        this.state = {
            count: 0
        }

        console.log("this is constructor!!!");
    }

    componentDidMount() {
        // Run only when component call first time
        console.log("this is componentDidMount!!!");
    }

    componentDidUpdate(preProps, preState, snapshot) {
        // Run when state and props get updated
        console.log("this is componentDidUpdate!!!");
    }

    shouldComponentUpdate() {
        console.log("this is shouldComponentUpdate!!!");
        return true; // Set false if no need to re-render component
    }

    componentWillUnmount() {
        // Run when component removed automatically called
        console.log("this is componentWillUnmount!!!");
    }

    render() {

        // Run each type when component render
        console.log("this is render!!!");

        return (
            <>
                <h3>Hello from Class Component Life Cycle Methods</h3>
                <br />
                <h1>{this.state.count}</h1>
                <br />
                <br />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>
            </>
        )
    }
}