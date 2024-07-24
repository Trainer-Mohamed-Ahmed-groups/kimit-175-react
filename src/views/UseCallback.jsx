import { useCallback, useState } from "react";
import Btn from "../components/Btn";

export default function UseCallbackExplain() {

    let [counter, setCounter] = useState(0)

    let increase = () => {
        setCounter(++counter)
    }

    let increaseCallback = useCallback(increase, [])
    return (
        <div>
            <h2>UseCallbackExplain</h2>
            <h3>{counter}</h3>
            <Btn clickHandle={increaseCallback} />
        </div>
    )
}
