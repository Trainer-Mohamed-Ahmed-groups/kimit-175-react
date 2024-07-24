import { useState } from "react";
import Product from "../components/Product";
import { Button } from "react-bootstrap";

export default function UseEffectExplain() {

    const [ShowProducts, setShowProducts] = useState(true)

    return (
        <div>
            <h2>UseEffect</h2>
            <Button variant="info" onClick={() => setShowProducts(false)}>Show</Button>

            {
                ShowProducts && <Product />
            }
        </div>
    )
}
