import React, { useEffect, useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import axios from 'axios';
import './Exchanges.css'
import millify from 'millify';

const ExchangesApi = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/exchanges',
  headers: {
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

function Exchanges() {

  const [open, setOpen] = useState();
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetchExchanges();
  },[])

  const fetchExchanges = () => {
    axios.request(ExchangesApi).then((resp) => {
      /* console.log(resp); */
      setExchanges(resp.data)
    })
  }
  /* console.log(exchanges);  */

  return (
    <div className='container mx-auto mt-10'>
      {exchanges.map((items,index) => {
        const handleOpen = (value) => setOpen(open === value ? 0 : value);
        return(
        <div key={index}>
          <Accordion open={open === index} className='bg-gray-50 border border-b-0 border-gray-200'>
            <AccordionHeader onClick={() => handleOpen(index)}>
              <div className='flex gap-3 px-5'>
                  <span className='mt-1 text-[14px]'>{items.trust_score_rank}.</span>
                  <img src={items?.image} alt="img" className='w-7 h-7 rounded-full' />
                  <h3 className='mt-1 text-[15px]'>{items?.name}</h3>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className='px-5'>
                <h1 className='mb-3'>{items?.description}</h1>
                <div>Estabished In: <span className='text-blue-600'>{items?.year_established}</span></div>
                <div>Country: <span className='text-blue-600'>{items?.country}</span></div>
                <div>Exchange: <a href={items?.url} className='text-blue-600'>{items.id}.com</a></div>
                <div>24h Trading Volume_BTC: <span className='text-blue-600'>{millify(items?.trade_volume_24h_btc)}</span></div>
                <div>24h Trading Volume_Others: <span className='text-blue-600'>{millify(items?.trade_volume_24h_btc_normalized)}</span></div>
                <div>Trust Score: <span className='text-blue-600'>{items?.trust_score}</span></div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      )})}
    </div>
  )
}

export default Exchanges