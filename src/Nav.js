import React, { useEffect, useState } from 'react'
import "./Nav.css"
import img from "./Assets/user.png"

function Nav() {
    const[ show, handleShow] = useState(false)

useEffect(() => {
   window.addEventListener("scroll",()=>{
       if(window.scrollY>100){
           handleShow(true)
       }else handleShow(false)
   })
   return()=>{
       window.removeEventListener("scroll")  //before you fire the use effect again close the old one
   }
}, [])


    return (
        <div className={`nav ${show  && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" className="netflix"/>
            <img src={img}  alt="NetFlix Icon" className="user"/>
            
        </div>
    )
}

export default Nav
