import React from 'react'
import "./VipCard.css"


const VipCard = (props) => {

    const {id, name, picture, pdf, author} = props.data
  return (
    <div className='card'>
        <div className="cardImg">
            <img src={picture} alt="" />
        </div>
        <div className="cardInfo">
            <span>{name}</span>
            <span>{author}</span>
            <a href={pdf} download>Yüklə</a>
        </div>
    </div>
  )
}

export default VipCard
