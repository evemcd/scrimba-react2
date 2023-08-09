import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="{`../../assets/${props.img}`}" />
        </div>
    )
}