import React from 'react'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import * as MdIcon from 'react-icons/md'
import * as GiIcon from 'react-icons/gi'

export default function Services() {
  return (
    <div className='service'> 
    
       <div className="cardd">
            <GiIcon.GiWorld size={70}/>
            <div className="cities">
            <div className="first">
            <h3 className='red'>Around the World</h3>
           
               
            </div>
                
                <p >Different places,different cities across the globe. We also provide tourism with customised packages. </p>
            </div>
        </div>
        <div className="cardd">
            <GiIcon.GiCommercialAirplane size={70}/>
            <div className="cities">
            <div className="">
            <h3 className='red'>Fastest Travel</h3>
           
               
            </div>
                
                <p >We provide convenient flights for our customers with all facilities to ensure convenient travel.</p>
            </div>
        </div>
        <div className="cardd">
            <FaIcon.FaRegLaughSquint size={70}/>
            <div className="cities">
            <div className="first">
            <h3 className='red'>Adventures</h3>
           
               
            </div>
                
                <p>We promise to make our customer's trip lot of fun and full of Adventures.</p>
            </div>
        </div>
        
    </div>
  )
}
