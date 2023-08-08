import React from "react"

export default function Joke() {
    return (
        <div className="joke">
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}