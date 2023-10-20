import React, { useState, useEffect } from 'react'
import axios from 'axios'
import millify from 'millify';
import { Link } from 'react-router-dom';

const CoinsList = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function CryptoCurrencies() {

  const [coins, setCoins] = useState([]);
  const [searchcoin, setSearchcoin] = useState('');

  useEffect(() => {
    fetchCoinsList();
    /* const filterCoin = coins?.filter((Fcoin) => Fcoin.name.toLowerCase().includes(searchcoin.toLowerCase()));
    setCoins(filterCoin); */
  },[/* searchcoin */]);

  const fetchCoinsList = () => {
    axios.get(CoinsList).then((resp) => {
      /* console.log(resp); */
      setCoins(resp.data);
    })
  }
  /* console.log(coins) */;

  const handelSearh = () => {
    return coins.filter((coin) => (
      coin.name.toLowerCase().includes(searchcoin) || coin.symbol.toLowerCase().includes(searchcoin)
    ))
  }

  return (
    <div className='mt-16 md:container md:mx-4'>
      <div className='mb-5'>
        <h3 className='text-lg md:text-2xl xl:text-[2.5rem] font-semibold text-center'>Cryptocurrency Prices by Market Cap</h3>
        <p className='mt-1 xl:mt-2 text-[10px] md:text-[14px] xl:text-[22px] text-gray-500 text-center'>The global cryptocurrency market cap today is $1.11 Trillion, a 2.1% change in the last 24 hours.</p>
      </div>
      <div className='my-5'>
        <input 
          type="text" 
          placeholder='Search crypto currency...' 
          className='w-full text-center border py-2 px-4 outline-none rounded-md' 
          onChange={(e) => setSearchcoin(e.target.value)}
        />
      </div>
      <table className='table w-full'>
          <thead className='border border-x-0'>
            <tr>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>#</th>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>Coins</th>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>Price</th>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>24h</th>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>24h Volume</th>
              <th className='text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]'>MKT Cap</th>
            </tr>  
          </thead>
          <tbody>
            {handelSearh().map((items,index) => {
              let profit = items.price_change_percentage_24h >= 0;
              
              return(
                <tr key={index} className='border border-x-0 border-t-0'>
                <td className='text-center text-[10px] md:text-[14px] py-2 md:py-4'>{items.market_cap_rank}</td>
                <td className='py-2 md:py-4'>
                  <Link to={`/crypto/${items.id}`} className='flex justify-start items-start gap-1 md:gap-4'>
                    <img src={items.image} alt="img" className='w-4 md:w-6' /> 
                    <span className='text-[10px] md:text-[14px]' >{items.name}</span> 
                    <span className='text-[10px] md:text-[14px] text-gray-400' >{items.symbol}</span> 
                  </Link>
                </td>
                <td className='text-center text-[10px] md:text-[14px] py-2 md:py-4'>$ {millify(items.current_price)}</td>
                <td 
                  className='text-center text-[10px] md:text-[14px] py-2 md:py-4' 
                  style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red"}} 
                >
                  {profit && '+'}{millify(items.price_change_percentage_24h)} % 
                </td>
                <td className='text-center text-[10px] md:text-[14px] py-2 md:py-4'>$ {millify(items.total_volume)}</td>
                <td className='text-center text-[10px] md:text-[14px] py-2 md:py-4'>$ {millify(items.market_cap)}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default CryptoCurrencies