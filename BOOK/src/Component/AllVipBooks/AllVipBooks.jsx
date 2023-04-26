import React, {useState} from 'react'
import "./AllVipBooks.css"
import AllVipData from './AllVipData'
import AllVipCards from './AllVipCards/AllVipCards'
import { Link } from 'react-router-dom'

const AllVipBooks = () => {

    const [search, setSearch] = useState("")

  return (
    <div className='allVipBooks'>
      <div className="allVipBooks-Back">
        <Link to="/"><i class="fa-solid fa-left-long"></i>Geri</Link>
      </div>
      <div className="allVip-Title">
        <span>Vip Kitablar</span>
      </div>
      <div className="allVip-Search">
        <input type="text" placeholder='Məsələn: Qanlı Gecə' className='search' 
        onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <div className="allVip-Body">
        {
            AllVipData
            .filter((item)=>{
                if(search==""){
                    return item
                }else if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return item
                }
            }).map((item)=>{
                return(
                    <div className="data" key={item.id}>
                        <AllVipCards data={item}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default AllVipBooks
