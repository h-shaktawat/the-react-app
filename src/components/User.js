export function User(props) {
    return (
        <>
            <h2>Hello From User Component!!!</h2>
            <br />
            <button onClick={props.appFun}>Call Function form Props</button>
        </>
    )
}