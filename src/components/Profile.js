import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import {Link} from "react-router-dom"
var path
export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            password:"", 
            confirm: false,
            employment: "",
            
        }
    )

  
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function HandleSubmit(event) {
        
       
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        console.log(formData)
        localStorage.setItem("Profile",JSON.stringify(formData))
        
        
        
    }
    
    return (
        <>
        <Header/>
            <div className="profile">
                <img src={require(`../images/${"login.jpeg"}`)}/>
            <form className="form">
        <label className="label"htmlFor="first">First-name</label>
            <input id="first"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
             <label className="label"htmlFor="second">Last-name</label>
            <input
            id="second"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
             <label className="label"htmlFor="email">Email</label>
            <input
            id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <label className="label"htmlFor="pass">Password</label>
            <input
            id="pass"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            <br/>
            
           
            
            <fieldset>
                <legend className="label">Nationality</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label className="no"htmlFor="unemployed">Indian</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label className="no"htmlFor="part-time">Other</label>
              
            </fieldset>
            <br />
            
           
            
            <br />
            <br />
            <input 
                type="checkbox" 
                id="submit" 
                checked={formData.confirm}
                onChange={ HandleSubmit}
                
                name="confirm"
            />
            <label className="radio"htmlFor="submit">Confirm Details</label>
            <br/>
            <br/>
           <Link to="/Login"><button className="form-submit">Submit</button></Link>  
        </form>
        </div>
        <Footer/>
        </>
    )
}
