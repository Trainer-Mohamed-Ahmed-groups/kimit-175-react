import { useEffect, useState } from "react"
import { Col, Container, Row, Spinner, Card } from "react-bootstrap"

export default function Products() {

    let [products, setProducts] = useState([])

    let getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h2>Products</h2>
            <Container>
                <Row>
                    {
                        products.length > 0 ?
                            products.map(product =>
                                <Col className="p-2" key={product.id} md={4} sm={12}>
                                    <Card className="h-100" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            :
                            <Spinner animation="border" variant="primary" />
                    }
                </Row>
            </Container>
        </div>
    )
}
