import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerLogo">
        <span>Book</span>
        <span>Read</span>
      </div>
      <div className="sosialMedia">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
  )
}

export default Footer
