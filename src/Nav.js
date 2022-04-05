import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"/>
        <img className="nav_avatar" 
            src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
            alt="avatar"/>
    </div>
  )
}

export default Nav;