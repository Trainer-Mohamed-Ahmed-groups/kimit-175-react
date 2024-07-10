import { useState } from "react";
import User from "../components/User";
import { Button } from "react-bootstrap";

export default function About() {
    let [show, setShow] = useState(true)
    return (
        <div>
            <h2>About</h2>
            <Button variant="info" onClick={() => setShow(!show)}>Show component</Button>
            {
                show && <User />
            }

        </div>
    )
}
