import React from 'react'
import AuthorsCards from './AuthorsCards/AuthorsCards'
import AuthorsData from './AuthorsData'
import "./Authors.css"

const Authors = () => {
  return (
    <div className='authors' id='authors'>
      <div className="authors-Title">
        <span>Yazarlar</span>
      </div>
      <div className="authors-Body">
        {
            AuthorsData.map((item)=>(
                <AuthorsCards data={item}/>
            ))
        }
      </div>
    </div>
  )
}

export default Authors
