import React from "react"

export default function Card(props) {
    return (
        <div>
            {props.img}
            <div className="card--stats">
                <img src="../../assets/star.png" className="star--img" />
                {props.review1}
                <span className="text--review1">5.0</span>

            </div>
        </div>
    )
}