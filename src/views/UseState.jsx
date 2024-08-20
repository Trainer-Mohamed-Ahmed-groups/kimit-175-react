import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function UseStateExplain() {

    // let [counter, setCounter] = useState(0)
    let countState = useSelector((state) => state.counter);
    let dispatch = useDispatch()


    return (
        <div>
            <h2>UseState</h2>
            {/* <div className="d-flex justify-content-around">
                <Button variant="primary" className="mx-3" onClick={() => setCounter(++counter)}>+</Button>
                <h3>{counter}</h3>
                <Button variant="danger" className="mx-3" onClick={() => setCounter(++counter)}>-</Button>
            </div> */}

            {/* ********************************************************* */}

            <div className="d-flex justify-content-around">
                <Button variant="primary" className="mx-3" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
                <h3>{countState}</h3>
                <Button variant="danger" className="mx-3" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
            </div>
        </div>
    )
}
