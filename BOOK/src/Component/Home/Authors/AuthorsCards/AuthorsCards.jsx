import React from 'react'
import './AuthorsCards.css'

const AuthorsCards = (props) => {
    const {id, fullName, info, img} = props.data
  return (
    <div className='authorsCards' key={id}>
      <div className="authorsCards-Img">
        <img src={img} alt="" />
      </div>
      <div className="authorsCards-Info">
        <div className="Info-Title">
            <span>{fullName}</span>
        </div>
        <div className="Info-Text">
            <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default AuthorsCards
