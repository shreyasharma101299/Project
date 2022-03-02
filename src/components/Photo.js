import React from "react"
import Favorites from "./Favorites"
import Destinations from "../Destinations"
import AllPlaces from "./AllPlaces"


export default function Photo(props){

    
    
    
    
    return (

        <div className="emplo">
          <img src={require(`../images/${props.photo}`)}/>

            <div className="photos">
                
                <h3>{props.name}</h3>
                
                <p>{props.desig}</p>
            </div>
          
        </div>
    )
}
