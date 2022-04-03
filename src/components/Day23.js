import React from 'react'
import "./day23.css"

const Day23 = ({top,center,bottom}) => {
  return (
    <div className='day23'>
        <h1 className={center.length > 14 ? "day23__h1 min-font" : center.length > 8 ? "day23__h1 mitle-font" : 'day23__h1'}>
            <div className='day23__line'></div>
            <span className='day23__span-1'>{top}</span>
            <span className='day23__center'>{center}</span>
            <span className='day23__span-2'>{bottom}</span>
            <div className='day23__line-1'></div>
            <div className='day23__line-2'></div>
        </h1>
    </div>
  )
}

export default Day23