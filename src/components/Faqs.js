import React from "react"
import Faq from "./Faq"
import Questions from "../Questions"
import Header from "./Header"
import  Footer from "./Footer"

export default function Faqs(){

    const question=Questions.map((fact) => {
        return (
            <Faq ques={fact.ques} ans={fact.ans}/>
        )
    })
    return(
        <div  >
           
        <div className="com-faq">
        <h2 className="faqh"> FAQ's</h2>
        <div className="faq"> 
            {question}
        </div>
        </div>
       
      
        </div>
    )
}

