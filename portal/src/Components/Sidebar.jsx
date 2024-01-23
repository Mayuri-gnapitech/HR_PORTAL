
import React, { Children, useState } from "react";
import '../Components/Sidebar.css'

import {  FaBars, FaUserAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FcLeave } from "react-icons/fc";
import { NavLink } from "react-router-dom";

// import { IoIosInformation } from "react-icons/io";
 
 const Sidebar = ({Children}) => {
    const[isOpen ,setIsOpen] =useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Myinfo",
            icon: <FaUserAlt />,
        },
 
        {
 
            path:"/",
            name:"Time",
            icon:<IoTimeOutline />
        },
 
        {
            path:"/",
            name:"leave",
            icon:<FcLeave />
        },
        // {
        //     path:"/",
        //     name:"About",
        //     // icon:
        // }
     ]
    return (
       
        <div className="container">
            <div style= {{width: isOpen ? "300px" : "50px"}}className="sidebar">
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginleft: isOpen ? "30px" : "0px"}} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon"> {item.icon}</div>
                            <div className="link-text">{item.name}</div>
                        </NavLink>
 
                    ))
                }
            </div>
           <main>{Children}</main>
           <h1>HR Portal Page</h1>
        </div>
    );
};
export default Sidebar;

