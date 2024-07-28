import { useContext, useRef } from "react"
import { CounterContext } from "../context/CounterProvider"

export default function UseRefExplain() {

    let count = useContext(CounterContext)

    let inputRef = useRef()

    let inputFocus = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.background = "#2D2D2D"
    }
    return (
        <div>
            <h2>UseRefExplain</h2>
            <h3>{count.count}</h3>
            <input type="text" ref={inputRef} />
            <button onClick={inputFocus}>Click me</button>
        </div>
    )
}
