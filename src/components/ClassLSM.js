import { Component } from "react";

export default class ClassLCM extends Component {

    constructor() {
        super();
        console.warn("this is constructor!!!");
    }

    componentDidMount() {
        console.warn("this is componentDidMount!!!");
    }

    render() {

        console.warn("this is render!!!");

        return (
            <>
                <h3>Hello from Class Life Cycle Methods</h3>
            </>
        )
    }
}