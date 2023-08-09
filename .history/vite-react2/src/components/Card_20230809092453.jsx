import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="{`../../assets/${props.img}`}" className="card--img" />
            <div className="card--stats">
                <img src="../../assets/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
            </div>
        </div>
    )
}