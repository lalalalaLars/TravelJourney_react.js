import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--img"/>
            <div className="card--location">
                <h3>{props.item.location}</h3>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="card--title">{props.item.title}</h1>
            <p className="card--description">{props.item.description}</p>
        </div>
    )
}