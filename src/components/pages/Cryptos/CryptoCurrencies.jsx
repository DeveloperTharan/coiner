import React, { useState, useEffect } from 'react'
import axios from 'axios'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon, MagnifyingGlassIcon, } from "@heroicons/react/24/outline";
import {Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Avatar, IconButton, Tooltip, Input, } from "@material-tailwind/react";

const CoinsList = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function CryptoCurrencies() {

  const [coins, setCoins] = useState([]);
  const [searchcoin, setSearchcoin] = useState('');

  useEffect(() => {
    fetchCoinsList();
  },[]);

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
    <div className='mt-16 container mx-auto'>
      <div className='mb-5'>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  All CryptoCurrencies
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  These are details about the all CryptoCurrencies
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    onChange={(e) => setSearchcoin(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      #
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Coins
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Price
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      24h
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      24h Volume
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      MKT Cap
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {handelSearh().map((items,index) => {
                let profit = items.price_change_percentage_24h >= 0;
                
                return(
                  <tr key={index} className='border border-x-0 border-t-0'>
                    <td className='p-4 border-b border-blue-gray-50'>{items.market_cap_rank}</td>
                    <td className='p-4 border-b border-blue-gray-50'>
                      <Link to={`/crypto/${items.id}`} className='flex justify-start items-start gap-1 md:gap-4'>
                      <Avatar
                          src={items.image}
                          alt='img'
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold mt-3"
                        >
                          {items.name}
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-bold text-gray-400 mt-3"
                        >
                          {items.symbol}
                        </Typography> 
                      </Link>
                    </td>
                    <td className='p-4 border-b border-blue-gray-50'>$ {millify(items.current_price)}</td>
                    <td 
                      
                      style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red"}} 
                    >
                      {profit && '+'}{millify(items.price_change_percentage_24h)} % 
                    </td>
                    <td className='p-4 border-b border-blue-gray-50'>$ {millify(items.total_volume)}</td>
                    <td className='p-4 border-b border-blue-gray-50'>$ {millify(items.market_cap)}</td>
                  </tr>
                )
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default CryptoCurrencies