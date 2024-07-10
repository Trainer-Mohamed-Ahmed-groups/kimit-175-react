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


    useEffect(() => {
        return () => {
            console.log("User component removed")
        }
    })

    return (
        <div>
            <h4>User component</h4>
            <input type="text" onChange={handleUsername} />
            <div>{username}</div>
        </div>
    )
}
