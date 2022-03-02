import React from 'react'

export default function EachFavourite(props) {
  return (
    <div>
      <div className="detail">
            <img src={require(`../images/${props.imag}`)}/>
            <div className="subdetails">
                
                <h2>{props.city}</h2>
                <div className='sub'>
                
                <p className='dprice'>{props.price}</p>
                < p className='dstay'>  {props.stay}</p>
                </div>
                <p className='dinfo'>{props.info}</p>
                
            </div>
        </div>
    </div>
  )
}
