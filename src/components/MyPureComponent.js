import { PureComponent } from "react";
import { Button } from "react-bootstrap";

export default class MyPureComponent extends PureComponent {

    constructor() {
        super();

        this.state = {
            count: 1,
            number: 1
        }
    }

    render() {

        console.log("Check Console for Re-rendering!!!")

        return (
            <>
                {/* 
                    This component is for all type of functionalities in react class component!!!
                */}

                <h3>This is Pure Component</h3>
                <h4>This component only render when state value different from previous state value!!!</h4>

                <br />
                <br />

                This Will Update with Re-rendering : {this.state.count}
                <br />

                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update Count and Re-render Component!!!
                </Button>

                <br />
                <br />

                This Will Update with Re-rendering : {this.state.number}
                <br />

                <Button onClick={() => this.setState({ number: this.state.number})}>
                    Update Number and No-render Component!!!
                </Button>


            </>
        )
    }
}