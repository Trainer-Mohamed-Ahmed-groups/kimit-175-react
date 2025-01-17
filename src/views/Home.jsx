import { useState } from "react";
import { Button, Card } from 'react-bootstrap';
export default function Home() {

    let [courseName, setCourseName] = useState("React");

    let handleClick = () => {
        // courseName = "Frontend"
        setCourseName('Frontend')
        console.log(courseName)
    }

    return (
        <div>
            <h2>Home</h2>
            <div>{courseName}</div>
            <Button variant="primary">Primary</Button>
            <button onClick={handleClick}>Click me</button>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
