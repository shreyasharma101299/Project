import React from 'react'
import * as MdIcon from 'react-icons/md'
import * as FaIcon from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <div className="profilee">
                <img src={require(`../images/${"world.jpeg"}`)}/>
                <div className='contact'>
                    <h3>Contact Details</h3>
                    <p>Geoffrey Lipman, Co-Founder</p>
                    <div className='inline'><MdIcon.MdEmail/><p> info@thesunprogram.com</p></div>
                    <div className='inline'><FaIcon.FaPhoneAlt/><p>+32495250789</p></div>
                </div>
                <div >
                    
                <form className='formmm' >
                <h3>Contact Form</h3>
                    <input id="email"type="text" placeholder="Name.." />
                    <input id="email"type="text" placeholder="Email.."name="email" />

                    <input id="email"type="text" placeholder="Phone Number.."name="email" />

                    <textarea  type="text"placeholder="Your Message.."name="comments"/>
                     <button className='form-submit'>Submit</button>
                </form>
                </div>

      </div>
    </div>
  )
}
