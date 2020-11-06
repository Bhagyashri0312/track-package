import React from "react";

export default function Card( {data} ) {
    const {
        id,
        parcel_id,
        user_name, 
        user_phone, 
        status, 
        eta,
        sender,
        location_name,
        last_updated
    } = data;

    return(
        <div>
         <article className= "card">
            <h1>
                <span> Shipment id: {id} </span>
            </h1>
            <p> Parcel_id: {parcel_id}</p>
            <p>User-name: {user_name} </p>
            <p> Phone: {user_phone} </p>
            <p> Status: {status} </p>
            <p> Estimated time of delivery: {eta} </p>
            <p> Sender Name: {sender} </p>
            <p> Location: {location_name} </p>
            <p> Last Updated: {last_updated} </p>
        </article>
        <br/>
        </div>
        
    );
}