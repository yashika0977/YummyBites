/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order the food you are craving for </h2>
            <p>Choose from a diverse Menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experience . Satisfy your cravings and elevate your dining experience.</p>
            <button> View Menu </button>
        </div>
    </div>
  )
}

export default Header