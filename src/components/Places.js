import React from "react"
import Destinations from "../Destinations"
import Card from "./Card"
import Header from "./Header"

export default function Places(){

    
        


   
        const places=Destinations.map((place) =>{
            const popu=place.popularity
            return(
               
             popu==="high" &&   <Card key={place.id}
                      imag={place.img}
                      city={place.city}
                      name={place.name}
                      info={place.info}
                      place={place}
                />
            )
        })
       
    
   
    
  
    return (
        <>
        
        
        <h2 className="faqh">Top Visited places</h2>
        <section className="cards-list">
                {places}
            </section>
            </>
    )
}