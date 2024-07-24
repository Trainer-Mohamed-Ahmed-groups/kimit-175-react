import { useState, useMemo } from "react"

export default function UseMemoExplain() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    let fullName = useMemo(
        () => (
            <div className="text-center" style={{ color: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>Full name is : {firstName + lastName}</div>
        ), [firstName, lastName]
    )

    return (
        <div>
            <h2>UseMemoExplain</h2>

            <hr />
            <input className="me-3" placeholder="enter first name" onChange={e => setFirstName(e.target.value)} />
            <input className="me-3" placeholder="enter last name" onChange={e => setLastName(e.target.value)} />
            <input className="me-3" placeholder="enter age" onChange={e => setAge(e.target.value)} />
            <hr />
            <div className="text-center">First name is : {firstName}</div>
            <div className="text-center">Last name is : {lastName}</div>
            {fullName}
            <div className="text-center">Age is : {age}</div>
        </div>
    )
}
