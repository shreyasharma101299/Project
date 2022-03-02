import React from 'react'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import * as MdIcon from 'react-icons/md'
export default function Services() {
  return (
      <>
  <h2 className='faqh '>Services</h2>
    <div className='services'> 
    
       <div className="cardd">
            <FaIcon.FaHotel  size={70}/>
            <div className="cities">
            <div className="first">
            <h3 className='red'>Affordable hotels</h3>
           
               
            </div>
                
                <p>Best hotels with all basic amenities made available to the tourists for their luxurious stay.</p>
            </div>
        </div>
        <div className="cardd">
            <MdIcon.MdFoodBank size={70}/>
            <div className="cities">
            <div className="first">
            <h3 className='red'>Food and Drinks</h3>
           
               
            </div>
                
                <p>Good quality food and drinks made availbale to the customers.</p>
            </div>
        </div>
        <div className="cardd">
            <AiIcon.AiFillSafetyCertificate size={70}/>
            <div className="cities">
            <div className="first">
            <h3 className='red'>Safety Guide</h3>
           
               
            </div>
                
                <p>Safety is our major criteria to have a better experience and we are strong in it.</p>
            </div>
        </div>
        
    </div>
    </>
  )
}
