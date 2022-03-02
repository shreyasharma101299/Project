import React from 'react'
import * as MdIcon from 'react-icons/md'
import Wishlist from './Wishlist';

export default function Wish(props) {
    
  const [state,setState]=React.useState("")

 
      function remove2(){
     
        
        
        const item=localStorage.getItem("place")
        const arr = item.split(",");
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===props.city)
            {
                arr.splice(i,1)
                
            }
        }
         localStorage.setItem("place",[arr])
         
         
         setState(localStorage.getItem("place"))
    }
   
    



  return (
    <div>
      <div className="card2">
            <img src={require(`../images/${props.imag}`)}/>
            
             
            <h3>{props.city}</h3>   
             
             <MdIcon.MdDelete size={35}onClick={remove2} className='delete'/>
               
                
            </div>
        </div>
 
  )
}
