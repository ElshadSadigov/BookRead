import React from 'react'
import VipData from './VipCard/VipData.js'
import VipCard from './VipCard/VipCard.jsx'

import "./VipBooks.css"
import { Link } from 'react-router-dom'

const VipBooks = () => {
    return (
        <div className='vipBooks'>
            <div className="vipBooks-Title">
                <span>Önərilən Kitablar</span>
                <Link to='/allVipBooks'>VIP</Link>
            </div>

            <div className="vipBooks-body">
                {
                    VipData.map((item) => (
                        <VipCard data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default VipBooks
