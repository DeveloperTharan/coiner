import React, { useEffect, useState } from 'react'
import axios from 'axios'
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CoinsList = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function CoinTable() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoinsList();
  },[])

  const fetchCoinsList = () => {
    axios.get(CoinsList).then((resp) => {
      /* console.log(resp); */
      setCoins(resp.data);
    })
  }
  /* console.log(coins) */

  return (
    <div className='grid grid-cols-3 mt-8 md:mt-32'>
      {coins.map((items,index) => {
        let profit = items.price_change_percentage_24h >= 0;
        return index < 21 && (
          <Card className="mt-6 w-96" key={items.id}>
            <CardBody>
              <div className='flex justify-between'>
                <div className='flex gap-2 mb-2'>
                  <img src={items?.image} alt="img" className='w-10' />
                  <Typography variant="h5" color="blue-gray" className="mt-2 capitalize">
                    {items?.id}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mt-2 uppercase text-gray-500">
                    {items?.symbol}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mt-2 uppercase text-gray-500"
                    style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red"}} 
                  >
                    {profit && '+'}{millify(items.price_change_percentage_24h)} % 
                  </Typography>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <Typography variant="h6" className="mt-2 ml-4 text-gray-600 text-[14px]">
                    <span className='capitalize text-blue-gray-900'>current price: </span>{millify(items?.current_price)}
                  </Typography>
                  <Typography variant="h6" className="mt-2 ml-4 text-gray-600 text-[14px]">
                    <span className='capitalize text-blue-gray-900'>volume: </span>{millify(items?.total_volume)}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" className="mt-2 ml-4 text-gray-600 text-[14px]">
                    <span className='capitalize text-blue-gray-900'>24h High: </span>{millify(items?.high_24h)}
                  </Typography>
                  <Typography variant="h6" className="mt-2 ml-4 text-gray-600 text-[14px]">
                    <span className='capitalize text-blue-gray-900'>24h Low: </span>{millify(items?.low_24h)}
                  </Typography>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to={`/crypto/${items?.id}`}>
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default CoinTable