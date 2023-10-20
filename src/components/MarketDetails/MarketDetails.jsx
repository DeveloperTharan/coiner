import React, { useEffect, useState } from 'react'
import axios from 'axios';
import millify from 'millify'

const marketdata = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/stats',
  headers: {
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

function MarketDetails () {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  },[])  

  const fetchdata = () => {
    axios.request(marketdata).then((resp) => {
      /* console.log(resp); */
      setData(resp.data.data)
    })
  }

  /* console.log(data); */

  return (
    <div className='container mx-auto w-full top-0 left-0 my-3'>
      <div className='flex overflow-x-auto items-center gap-5 bg-white px-10 py-2 lg:py-0'>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              Cryptos: <span className='text-blue-600'>{millify(data.totalCoins)}</span>
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              Exchanges: <span className='text-blue-600'>{millify(data.totalExchanges)}</span>
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              Market Cap: <span className='text-blue-600'>$ {millify(data.totalMarketCap)}</span> 
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              24h Vol: <span className='text-blue-600'>{millify(data.total24hVolume)}</span>
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              Total Markets: <span className='text-blue-600'>{millify(data.totalMarkets)}</span>
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
              btc Dominane: <span className='text-blue-600'>{millify(data.btcDominance)}</span>
          </div>
          <div className='text-[11px] text-gray-400 font-normal whitespace-nowrap'>
            ReferenceCurrencyRate: <span className='text-blue-600'>{millify(data.referenceCurrencyRate)}</span>
          </div>
      </div>
    </div>
    
  )
}

export default MarketDetails