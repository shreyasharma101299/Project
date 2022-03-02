import React from "react"
import {Link} from "react-router-dom"
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import {IconContext} from 'react-icons'
export default function Header(){

    
    
    return (
        <nav>
        <img src={require("../logo.png")}/>
        <h1>ENCHANTING ESCAPES TRAVEL</h1>
        <div >
            
            <ul className="header">
            <li><Link  to="/">
            <button className="btn">Home</button></Link></li>
            <li><Link  to="/Places">
            <button  className="btn">Explore Places</button></Link></li>
            
            <li><Link  to="/About">
            <button className="btn" >About Us</button></Link></li>
            
            </ul>
        </div>
        
        </nav>
        
    )
}