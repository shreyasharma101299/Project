import React from 'react'
import Header from "./Header"
import Info from "../Info"
import EachFavourite from './EachFavourite'
import Footer from "./Footer"
let arr=[]
export default function Favorites(props) {
  let Dataa = (JSON.parse(localStorage.getItem("favourites")))
  
  const place=Info.map((item)=>{
    return(
    item.city===Dataa.city&&  <EachFavourite city={Dataa.city} info={item.info} imag={Dataa.img} price={item.price} stay={item.stay}/>
    )
  })


  return (
    <>
    <Header/>
    
    <div className='det'>
    {place}
    </div>

    <Footer/>
   
    
    </>
  )
}
