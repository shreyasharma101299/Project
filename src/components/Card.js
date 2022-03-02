import React from "react"
import * as AiIcon from 'react-icons/ai'
import {Link} from "react-router-dom"

export default function Card(props){

    const [favo,setFavo]=React.useState(false)
    
    const favourite=() =>{
      
        return(
            localStorage.setItem("favourites",obj)
        )
    }
    let obj=JSON.stringify(props.place)

    const icon=favo?"fillStar.png":"emptyStar.jpeg"
    return (

        <div className="card">
            <img src={require(`../images/${props.imag}`)}/>
            <div className="cities">
            <div className="first">
            <h3>{props.city}</h3>
            <Link to="/Favorites"><button onClick={favourite}className="cartt">Explore</button></Link>
               
            </div>
                
                <p className='small'> {props.info}</p>
            </div>
        </div>
    )
}