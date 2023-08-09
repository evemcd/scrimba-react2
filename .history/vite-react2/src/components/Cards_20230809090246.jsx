import React from "react"
import Card from "./Card.jsx"
// import katie-zaferes.img from "../../assets/katie-zaferes.png"

export default function Cards() {
    return (
        <div
            className="card"
            img="katie-zaferes.img">
                <img src="../../assets/star.png" className="star--img" />
                <span className="text--review1">5.0</span>
                <span className="gray"> (6) *</span>
                <span className="tgray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div >
    )
}
