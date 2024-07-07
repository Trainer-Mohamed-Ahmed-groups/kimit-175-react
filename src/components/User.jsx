import { useEffect, useState } from "react"

export default function User() {

    var [username, setUsername] = useState("");


    let handleUsername = (ev) => {
        setUsername(ev.target.value)
    }

    useEffect(() => {
        console.log("User component mounted")
    }, [])

    useEffect(() => {
        if (username === "") return;
        console.log("User component updated")
    }, [username])

    return (
        <div>
            <input type="text" onChange={handleUsername} />
            <div>{username}</div>
        </div>
    )
}
