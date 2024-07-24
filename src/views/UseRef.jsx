import { useRef } from "react"

export default function UseRefExplain() {

    let inputRef = useRef()

    let inputFocus = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.background = "#2D2D2D"
    }
    return (
        <div>
            <h2>UseRefExplain</h2>
            <input type="text" ref={inputRef} />
            <button onClick={inputFocus}>Click me</button>
        </div>
    )
}
