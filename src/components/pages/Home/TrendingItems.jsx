import React from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom'

function TrendingItems({coins}) {

    let profit = coins.price_change_percentage_24h >= 0;

  return (
        <Link to={`/crypto/${coins.id}`} className='mt-10 flex flex-col justify-center items-center' >
          <img 
            src={coins.image} 
            alt="img" 
            className='w-5 md:w-8' 
          />
          <div className='flex mt-6'>
            <h1 className='uppercase font-bold text-[10px] md:text-[12px]'>{coins.symbol}</h1>
            <span 
              className='ms-4 text-[10px] md:text-[12px]' 
              style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red"}} >
                {profit && '+'}{millify(coins.price_change_percentage_24h)} %
            </span>
          </div>
          <h1 className='text-[12px] md:text-[15px] tracking-wide'>$ {coins.current_price}</h1>
        </Link>
  )
}

export default TrendingItems