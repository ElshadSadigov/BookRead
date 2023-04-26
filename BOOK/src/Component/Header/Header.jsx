import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerLogo">
            <Link to='/'>
                <span>Book</span>
                <span>Read</span>
            </Link>
        </div>
        <div className="headerInfo">
            <ul>
                <li><a href="#books">Kitablar</a></li>
                <li><a href="#authors">Yazıçılar</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
