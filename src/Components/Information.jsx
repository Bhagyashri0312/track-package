//React core
import {useEffect, useState} from "react";

//Componenets
import Card from "../Components/Card";


export default function Information(){

    //o is loading, 1 is ready, 2 is error
    const [status, setStatus]= useState(0);
    const [information, setInformation]= useState([]);
    const endpoint= "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await fetch(endpoint, {mode: "cors"});
                const data = await response.json();
                
                setInformation(data);
                setStatus(1);

            }
            catch{
                setStatus(2);

            }

        };
           getData();
        
    }, []);

    const Cards = information.map((item) => {
        return <Card key = {item.id} data = {item} />;
    
    });


    return(
        <div className= "divide">
            <h1 className="title"> Order Details </h1>
            {status === 0 ? <p>Loading...</p> : null}
            {status === 1 ? <p className= "box">{Cards}</p> : null}
            {status === 2 ? <p>Cannot find data</p> : null}
        </div>
    );
}