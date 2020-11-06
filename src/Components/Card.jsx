import React from "react";

export default function Card( {data} ) {
    const {
        id, 
        user_name, 
        user_phone, 
        status, 
        eta,
        sender,
        location_name,
        last_updated
    } = data;

    return(
        <article className= "card">
            <h1>
                <span> #{id} </span>
            </h1>
            <p>User-name: {user_name} </p>
            <p> Phone: {user_phone} </p>
            <p> Status: {status} </p>
            <p> Estimated time of delivery: {eta} </p>
            <p> Sender Name: {sender} </p>
            <p> Location: {location_name} </p>
            <p> Last Updated: {last_updated} </p>
        </article>
    );
}