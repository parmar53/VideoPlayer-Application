import React, { useState } from 'react'
import "./Sidebar.scss";
import {MdHome, MdOndemandVideo, MdSettings} from "react-icons/md";
import {FaUser} from "react-icons/fa";

const Sidebar = () => {

  // const [sidebar, setSidebar] = useState(false)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
  <nav className='sidebar'>
    
    {/* <div className='position-fixed'> */}
      <li>
        <MdHome size={30}/>
        <span>Home</span>
      </li>

      <li>
        <FaUser size={30}/>
        <span>Profile</span>
      </li>

      <li>
        <MdOndemandVideo size={30}/>
        <span>Videos</span>
      </li>

      <li>
        <MdSettings size={30}/>
        <span>Settings</span>
      </li>
     
  </nav>
  )
}

export default Sidebar