import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineCalendar } from 'react-icons/ai'
import moment from 'moment/moment';
import img from '../../../assets/explore-3.png'

const latestNews = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news',
  headers: {
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }
};

function News() {

  const [news,setNews] = useState([]);

  useEffect(() => {
    fethLatestNews();
  },[])

  const fethLatestNews = () => {
    axios.request(latestNews).then((resp) => {
      /* console.log(resp); */
      setNews(resp.data);
    })
  }
  /* console.log(news); */

  const date = new Date();
  const currentdate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='mt-20 uppercase text-2xl font-bold'>NEWS</h1>
        <p className='mt-2 text-[14px] text-gray-600'>Insights into the biggest events shaping the crypto industry.</p>
      </div>
      <div className='mt-8 text-2xl flex'>
        <AiOutlineCalendar className='me-3' />
        {currentdate}
      </div>
      <div className='mt-5'>
          {news.map((items,index) => (
            <div key={index}>
              <div className='border border-gray-400 rounded-md px-6 py-6 my-10 flex gap-10'>
                <img src={img} alt="img" className='w-40' />
                <div>
                  <h3 className='text-md font-semibold'>{items?.source}</h3>
                  <p className='text-xs'>{items?.title}</p>
                  <a href={items?.link} className='text-[14px] text-blue-600' >Read More...</a>
                  <div className='text-[14px] mt-2'>{moment(items?.pubDate).startOf('hour').fromNow()}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default News