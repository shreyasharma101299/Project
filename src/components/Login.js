import React from 'react'
import { Link } from "react-router-dom"
export default function Login() {
    let Dataa = (JSON.parse(localStorage.getItem("Profile")))




    const [formData, setFormData] = React.useState({
        email: "", pass: ""
    })


    function handleChange(event) {
        setFormData((prev) => {
            return (
                {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            )
        })
    }
    const [correct, setCorrect] = React.useState(false)
    function handleSubmit(event) {
        setFormData((prev) => {
            return (
                {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            )
        })
        if (formData.email === Dataa.email && formData.pass === Dataa.password) {


            if (formData.pass.slice(0, formData.pass.length) === Dataa.password) {
                setCorrect(!correct)
                alert("Login Successful")

            }
            else
                alert("Login Failed")
        }


    }
    var path = correct ? "/Intro" : "/Login"
    console.log(formData.pass.slice(0, formData.pass.length))

    console.log(correct)
    return (
        <div>
            <div className="profile">
                <img src={require(`../images/${"login.jpeg"}`)} />
                <div >
                    <h1>Login</h1>
                    <form className="formm" >

                        <label className="label" htmlFor="email">Email</label>
                        <input id="email" type="text" name="email" onChange={handleChange} />
                        <label className="label" htmlFor="pass">Password</label>
                        <input id="pass" type="text" name="pass" onChange={handleSubmit} />
                        <Link to={path}> <button className='form-submit'>Submit</button></Link>
                    </form>
                </div>

            </div>
        </div>
    )
}
