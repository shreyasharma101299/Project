import React from "react"
import travel from "../images/ftravel.jpeg"
import Places from "./Places"
import Header from "./Header"
import Footer from "./Footer"
import {Link} from "react-router-dom"
import  Faqs from "./Faqs"
import Services from "./Services"
import Service from "./Service"

export default function Intro(){

    return (
        <>
        <Header/>
        <span className="travel">
            <img  src={travel}/>
            <h1 className="text ">Plan your trip with us</h1>
          <button><Link to="/Profile"><button className="account">Create Account</button></Link></button>
        </span>
        <Places/>
        <Faqs/>
        <Services/>
        <Service/>
        <Footer/>
        </>
    )
}

