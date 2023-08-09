import React from "react"
import Card from "./Card.jsx"
import KatieZaferes from "../../assets/katie-zaferes.png"

export default function Cards() {
    return (
        <div className="card">
            {/* <img src="../../assets/katie-zaferes.png" className="card--img" /> */}
            <div img="katie-zaferes.img"></div>
            <div className="card--stats">
                <img src="../../assets/star.png" className="star--img" />
                <span className="text--review1">5.0</span>
                <span className="gray"> (6) *</span>
                <span className="tgray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}
