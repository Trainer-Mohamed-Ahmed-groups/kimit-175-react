import { useEffect, useState } from "react"

export default function Products() {

    let [products, setProducts] = useState([])

    let getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h2>Products</h2>
        </div>
    )
}
