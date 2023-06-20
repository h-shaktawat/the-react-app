import { forwardRef } from "react";

function ForwardRefHook(props, fRef) {
    return (
        <>
            <h1>Use Forward Ref Hook in React</h1>
            <br />
            <br />
            <input type="text" ref={fRef} />
        </>
    );
}

export default forwardRef(ForwardRefHook);