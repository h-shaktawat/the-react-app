import { Button } from "react-bootstrap";

function TestComponent(props) {

    const message = "This is message from child component";

    return (
        <>
            <h3>This is Child Component</h3>
            <Button onClick={() => props.alert(message)}>
                Send Message to Parent Component
            </Button>
        </>
    );
}

export default TestComponent;