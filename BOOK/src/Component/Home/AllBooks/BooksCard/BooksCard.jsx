import React from 'react'
import "./BooksCard.css"

const BooksCard = (props) => {
    const { id, name, author, pdf, picture } = props.data

    return (
        <div className='booksCard' key={id}>
            <div className="booksImg">
                <img src={picture} alt="" />
            </div>
            <div className="bookInfo">
                <div className="bookInfo-Title">
                    <span>{name}</span>
                    <span>{author}</span>
                </div>
                <div className="bookDownload">
                    <a href={pdf} download>Yüklə</a>
                </div>
            </div>
        </div>
    )
}

export default BooksCard
