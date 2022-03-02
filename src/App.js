import './App.css';
import React from "react"
import Header from './components/Header';
import Intro from "./components/Intro"
import AllPlaces from "./components/AllPlaces"
import Faqs from "./components/Faqs"
import About from "./components/About"
import Favorites from "./components/Favorites"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Wishlist from "./components/Wishlist"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    
      
    <>
    
     <Routes>
     <Route path="/" element={ <Intro />} />
     <Route path="/Places" element={ <AllPlaces />} />
     <Route path="/Faq" element={ <Faqs />} />
     <Route path="/About" element={ <About />} />
     <Route path="/Favorites" element={ <Favorites />} />
     <Route path='/Profile' element ={<Profile/>}/>
     <Route path='/Login' element ={<Login/>}/>
     <Route path='/Intro' element ={<Intro/>}/>
     <Route path='/Wishlist' element ={<Wishlist/>}/>


        </Routes>
    </>
  );
}

export default App;
