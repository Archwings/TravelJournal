import React from "react";

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--img" src={props.item.imageUrl}/>
            <div className="card--rightSide">
                <div className="card--topContainer">
                    <img src="../images/Fill219.png" className="card--loc-img"/>
                    <h1 className="card--country">{props.item.location}</h1>
                    <a href={props.item.googleMapsUrl} className="card--mapsLink" >View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h3 className="card--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </div>
    )
}


//         id: "0",
//         title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
