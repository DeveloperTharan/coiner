import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TrendingItems from './TrendingItems';

const Trendingcrypto = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h';

function TrendingCoins() {

  const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        fetchTrendingCoins();
    },[])

    const fetchTrendingCoins = () => {
        axios.get(Trendingcrypto).then((resp) => {
            /* console.log(resp.data); */
            setCoinData(resp.data);
        })
    }
    /* console.log(coinData); */
    
    const settings = {
      mouseTracking: true,
      infinite: true, 
      autoPlayInterval: 1000,
      animationDuration: 1500,
      disableDotsControls: true,
      disableButtonsControls: true,
      autoPlay: true,
      responsive: {
          0: {
              items: 1,
          },
          320: {
            items: 3,
          },
          768: {
            items: 5,
          },
          1024: {
              items: 5,
              itemsFit: 'contain',
          },
          1440: {
              items: 7,
              itemsFit: 'contain',
          },
          1660: {
            items: 9,
            itemsFit: 'contain',
          }
        }
  }

  return (
    <div className='relative top-16'>
      <div>
        <h3 className='text-lg md:text-2xl xl:text-[2.5rem] font-semibold text-center'>Cryptocurrency Prices by Market Cap</h3>
      </div>
      <AliceCarousel {...settings}>
        {coinData.map((items,index) => (
          <div key={items.id}>
            <TrendingItems
              coins={items}          
            />
          </div>
        ))}
      </AliceCarousel>
    </div>
  )
}

export default TrendingCoins