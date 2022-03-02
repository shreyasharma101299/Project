import React from "react"
import Data from "../Data"
import Photo from "./Photo"
import Header from "./Header"
import Footer from "./Footer"
import Destinations from "../Destinations"
import Contact from "./Contact"
export default function About(){

   
    
        const places=Data.map((place) =>{

            return(
               
               <Photo 
                      key={place.id}
                      photo={place.img}
                      name={place.city}
                      desig={place.info}
                      
                />
            )
        })
       
        

    return (
        <>
       
        <Header/>

        <h2 className="faqh">Our Team</h2>
        <div className="emplo middle">
          <img src={require(`../images/mama3.jpeg`)}/>

            <div className="photos ">
                
                <h3>Elijah Washington</h3>
                
                <p>Executive Director</p>
            </div>
          
        </div>
        <section className="allemplo">
        {places}
            </section>

        <div className="cserve">
        <h2 >Who We Serve</h2>
        <h3>Travel Unity seeks to make the world of travel welcoming to people of all backgrounds and abilities.
           The following are the groups who we work with most consistently.</h3>
        <div className="serve">
          <div>
          <h2>Young people</h2>
          <p>
          Travel Unity works with career and technical education (CTE) programs in high schools, as well as other school and after-school programs.
          Some of our relationships include public schools in New York City and Dallas.
          </p>
          </div>
          <div>
          <h2>People with disabilities</h2>
          <p>Travel Unity collaborates with vocational rehabilitation (VR) programs across the country to connect those with individuals 
            to satisfying career opportunities in the world of travel.</p>
            </div>
            <div>
              <h2>The travel industry</h2>
              <p>Travel Unity convenes its annual Summit and works with partners on educational events throughout the year to 
                educate the industry on best practices for diversity, equity, and inclusion.</p>
            </div>
        </div>
        </div>


       <Contact/>
            <Footer/>
           
            </>
    )
}