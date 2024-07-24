import { useEffect, useState } from "react"

export default function Product() {

    const [productName, setProductName] = useState("")

    useEffect(() => {
        console.log('Rendered')
    }, [])


    useEffect(() => {
        if (!productName) return;
        console.log('Updated')
    }, [productName])

    useEffect(() => {
        return () => {
            console.log("Deleted")
        }
    }, [])

    return (
        <div>
            <h4>product</h4>
            <input type="text" onChange={e => setProductName(e.target.value)} />
            <div>{productName}</div>
        </div>
    )
}
