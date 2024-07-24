import React from "react"
// eslint-disable-next-line react/prop-types
function Btn({ clickHandle }) {
    return (
        <button onClick={clickHandle} style={{ background: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>Btn</button>
    )
}

export default React.memo(Btn)