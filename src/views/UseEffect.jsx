import { useContext, useState } from "react";
import Product from "../components/Product";
import { Button } from "react-bootstrap";
import { CounterContext } from "../context/CounterProvider";

export default function UseEffectExplain() {

    const [ShowProducts, setShowProducts] = useState(true)
    const count = useContext(CounterContext)

    return (
        <div>
            <h2>UseEffect</h2>
            <h3>{count.count}</h3>
            <Button variant="warning" onClick={() => count.setCount(++count.count)}>Change context value</Button>
            <Button variant="info" onClick={() => setShowProducts(false)}>Show</Button>

            {
                ShowProducts && <Product />
            }
        </div>
    )
}
