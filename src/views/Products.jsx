import { useEffect, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"

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
            <Container>

                <Row>
                    <Col lg={3} sm={12}>test</Col>
                    <Col lg={3} sm={12}>test</Col>
                    <Col lg={3} sm={12}>test</Col>
                    <Col lg={3} sm={12}>test</Col>
                </Row>
            </Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
