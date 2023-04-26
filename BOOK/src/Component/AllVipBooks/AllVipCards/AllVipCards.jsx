import React from 'react'
import './AllVipCards.css'

const AllVipCards = (props) => {
  const {id, name, author, pdf, picture } = props.data
  return (
    <div className='allVipCards' key={id}>
      <div className="allVipCards-Img">
        <img src={picture} alt="" />
      </div>
      <div className="allVipCards-Info">
        <div className="allVipCards-Title">
          <span>{name}</span>
          <span>{author}</span>
        </div>
        <div className="allVipCards-PDF">
          <a href={pdf} download>Yüklə</a>
        </div>
      </div>
    </div>
  )
}

export default AllVipCards
