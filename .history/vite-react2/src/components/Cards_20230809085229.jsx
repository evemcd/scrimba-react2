import React from "react"

export default function Card() {
    return (
        <div className="card">
            {/* <img src="../../assets/katie-zaferes.png" className="card--img" /> */}
            <div img=""></div>
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
