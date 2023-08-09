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
            </div>
        </div>
    )
}

/*
            <span className="tgray">USA</span>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
*/