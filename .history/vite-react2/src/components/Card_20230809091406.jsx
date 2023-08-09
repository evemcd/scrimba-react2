import React from "react"

export default function Card(props) {
    return (
        <div>
            {props.img}
            <div className="card--stats">
                <img src="../../assets/star.png" className="star--img" />
                {props.stars}
                {props.reviews}
                {props.country}
                {props.title}
                {props.price}
            </div>
        </div>
    )
}