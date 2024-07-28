import { createContext, useState } from "react"

export var CounterContext = createContext()

// eslint-disable-next-line react/prop-types
export default function CounterProvider({ children }) {

    const [count, setCount] = useState(10)

    return (
        <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>
    )
}
