import React from 'react'
import "./Books.css"
import BooksCard from './BooksCard/BooksCard'

import BooksData from './BooksData'
import { Link } from 'react-router-dom'

const AllBooks = () => {
    return (
        <div className='books' id='books'>
            <div className="books-Title">
                <span>Kitablar</span>
                <Link to='/booksAll'>Daha Çox</Link>
            </div>

            <div className="books-Body">
                {
                    BooksData.map((item) => (
                        <BooksCard data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllBooks
