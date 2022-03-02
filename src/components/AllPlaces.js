import React from "react"
import Destinations from "../Destinations"
import AllCards from "./AllCards"
import Header from "./Header"
import Footer from "./Footer"
import Wishlist from "./Wishlist"
import * as FaIcon from 'react-icons/fa'

export default function AllPlaces(){

   
    
        const places=Destinations.map((place) =>{

            return(
               
               <AllCards key={place.id}
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
       
        <Header/>
       
        <div className="side">
        <div className="left">
            <h2 className="faqh2">Explore Cities</h2>
        
            <section className="allplaces">
            {places}
            </section>
        </div> 
        <div className="right"><Wishlist/></div>

        </div>
      
            <Footer/>
           
            </>
    )
}