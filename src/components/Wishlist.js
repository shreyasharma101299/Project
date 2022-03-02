import React from 'react'
import Wish from "./Wish"
import Header from "./Header"
import Info from "../Info"


var arr=[]
var ar=[]
export default function Wishlist(props) {
    
 
  const [count,setCount]=React.useState(0)
  const [state,setState]=React.useState("")
  let Data = ((localStorage.getItem("place")))
    
    var arr=[Data]
    const myArray = Data.split(",");

    
 
React.useEffect(()=>{
 

  setTimeout(() => {
    setCount((count) => count + 1);
  }, 500);
  const myArray = Data.split(",");
  
   setState(localStorage.getItem("place"))
 
},[count])



 const places=myArray.map((item)=>{
   
  return(
    Info.map((info)=>{
      return(info.city===item&&  <Wish city={info.city} info={info.info} imag={info.img} price={info.price} stay={info.stay}/>)
    })
  )
 })

  return (
    <div>
      
      <h2 className="faqh3">Wish List</h2>
      <h1 className="wish">{places}</h1>
    </div>
  )
}
