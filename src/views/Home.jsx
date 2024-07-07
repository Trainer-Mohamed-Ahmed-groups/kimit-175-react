import { useState } from "react";

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
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
