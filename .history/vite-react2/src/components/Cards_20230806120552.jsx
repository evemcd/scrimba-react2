import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="../../assets/katie-zaferes.png" className="card--img" />
            <div className="card--stats">
                <img src="../../assets/star.png" className="star--img" />
                <span className="text--review1">5.0</span>
                <span className="text--review2"> (6) *</span>
                <span className="text--review2">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}
