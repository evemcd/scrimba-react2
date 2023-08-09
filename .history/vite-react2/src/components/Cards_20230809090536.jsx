import React from "react"
import Card from "./Card.jsx"
// import katie-zaferes.img from "../../assets/katie-zaferes.png"

export default function Cards() {
    return (
        <div
            className="card"
            img="katie-zaferes.img">
            <span className="gray"> (6) *</span>
            <span className="tgray">USA</span>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div >
    )
}
