import React from 'react'
import "./BooksCards.css"

const BooksCards = (props) => {
    const { id, name, author, picture, pdf } = props.data
    return (
        <div className='booksCards' key={id}>
            <div className="booksCards-Img">
                <img src={picture} alt="" />
            </div>
            <div className="booksCards-Info">
                <div className="Info-Text">
                    <span>{name}</span>
                    <span>{author}</span>
                </div>
                <div className="Info-Btn">
                    <a href={pdf} download><i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
    )
}

export default BooksCards
