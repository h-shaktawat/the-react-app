import React, { Component } from "react";

export default class ClassComponent extends Component {

    constructor() {
        super();

        this.state = {
            data: 1
        }
    }

    increment() {
        this.setState({ data: this.state.data + 1 });
    }

    decrement() {
        this.setState({ data: this.state.data - 1 });
    }

    render() {
        return (
            <>
                <p>
                    <button onClick={() => this.decrement()}>
                        -
                    </button>
                    {this.state.data}
                    <button onClick={() => this.increment()}>
                        +
                    </button>
                </p>
                <h1>
                    {this.props.name}
                </h1>
            </>
        )
    }
}