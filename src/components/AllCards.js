import React from "react"
import Favorites from "./Favorites"
import Destinations from "../Destinations"
import AllPlaces from "./AllPlaces"
import {Link} from "react-router-dom"
import Wishlist from "./Wishlist"
import { setRef } from "@mui/material"
import * as BiIcon from 'react-icons/bi'
var arr=["wish"]

export default function AllCards(props){


   
    const [favo,setFavo]=React.useState( false)
    
    
    const favourite=() =>{
      
        return(

            localStorage.setItem("favourites",obj)
           
        )
    }
    
    
    localStorage.setItem("place",arr)
    function Favourite(){
        setFavo((favo)=>!favo)
        arr.push(props.city)
        
         localStorage.setItem("place",[arr])
         
        
       
    }
    function Favourites(){
        setFavo((favo)=>!favo)
        arr.push(props.city)
        
        for(let i=0;i<arr.length-1;i++)
        {
            if(arr[i]===props.city)
            {
                arr.splice(i,1)
                arr.pop()
            }
        }
         localStorage.setItem("place",[arr])
         
         
       
    }
    
    
    const icon=favo?"Remove from Wishlist": "Add to Wishlist"
    let obj=JSON.stringify(props.place)
    
  
    return (

       < div className="next">
            <div className="allcard">
                

                <img src={require(`../images/${props.imag}`)}/>
                <div className="cities">
                    
                    <h3>{props.city}</h3>
                    
                    <p>{props.info}</p>
                </div>
                <Link to="/Favorites"><button onClick={favourite}className="cart">Explore</button></Link>
                <BiIcon.BiListPlus size={60} onClick={Favourite} />
                <BiIcon.BiListMinus size={60} onClick={Favourites} />
               

            </div>
            
      </div>
    )
}
