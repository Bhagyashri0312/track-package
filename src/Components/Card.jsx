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
            <hr/>
            <span className="Parcel_id"> Parcel_id: </span> 
            <span>{parcel_id} </span> <br/>
            <span className="Status"> Status:  </span>  
            <span>{status}</span>  <br/>
            <span className="ETA"> ETA: </span>  
            <span>{eta}</span> <br/>
            <span className="Sender-Name"> Sender-Name:  </span> 
            <span>{sender} </span> <br/>
            <span className="Location"> Location: </span> 
            <span>{location_name}</span> <br/>
            <span className="Last-Updated"> Last-Updated: </span> 
            <span>{last_updated} </span> <br/>
        </article>
        <br/>
        </div>
        
    );
}