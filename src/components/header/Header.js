import React from 'react'
import "./header.scss";
import {FaBars} from "react-icons/fa";

const Header = () => {
  return (
    <div className='header border border-dark'>
        {/* <FaBars className="header__menu" size={30}/> */}

        <h3>Video Player</h3>
    </div>
  )
}

export default Header