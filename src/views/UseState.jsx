import { useState } from "react";

export default function UseStateExplain() {

    let [username, setUsername] = useState("Mohamed");

    return (
        <div>
            <h2>UseState</h2>
            <input type="text" placeholder="Enter your name" onChange={e => username = setUsername(e.target.value)} />
            <h3>{username}</h3>
        </div>
    )
}
