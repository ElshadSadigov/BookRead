import React, {useState} from 'react'
import './BooksAll.css'
import { Link } from 'react-router-dom'
import BooksData from './BooksAll.Data'
import BooksCards from './BooksCards/BooksCards'

const BooksAll = () => {

  const [search, setSearch] = useState("")

  return (
    <div className='booksAll'>
      <div className="booksAll-Back">
        <Link to="/"><i class="fa-solid fa-left-long"></i>Geri</Link>
      </div>
      <div className="booksAll-Title">
        <span>Kitablar</span>
      </div>
      <div className="booksAll-Search">
        <input type="text" className='input' placeholder='Məsələn: Sirrli Oda' onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <div className="booksAll-Body">
        {
          BooksData
          .filter((item)=>{
            if(search==""){
              return item
            }else if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return item
            }
          }).map((item)=>{
            return(
              <div className="data" key={item.id}>
                <BooksCards data={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BooksAll
