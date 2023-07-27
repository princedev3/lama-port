import React from 'react'
import "./topbar.scss"

import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"

const Topbar = ({menuOpen,setMenuopen}) => {
  return (
    <div className={'topbar '+ (menuOpen && "active")} id='topbar'>
         <div className='wrapper'>
            <div className='left'>
                    <a href='#intro' className='logo'>JK</a>
                    <div className='itemContainer' >
                        <AiOutlineMail className='icon'/>
                        <span>marvin@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                        <BsFillPersonFill className='icon'/>
                        <span>+358 4445 578</span>
                    </div>
            </div> 
            <div className='right' onClick={()=>setMenuopen(!menuOpen)}>
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Topbar