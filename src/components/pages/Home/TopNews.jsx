import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

const News = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {
    safeSearch: 'Off',
    textFormat: 'Raw'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};
  

function TopNews() {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchTopNews();
    },[]);

    const fetchTopNews = () => {
        axios.request(News).then((resp) => {
            /* console.log(resp); */
            setNewsData(resp.data.value);
        })
    }
    /* console.log(newsData);*/
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4 mt-10 md:mt-32 gap-5'>
        {newsData.map((news,index) => index < 4 && (
            <div className='shadow-2xl w-full px-4 py-4 hover:scale-105 cursor-default rounded-xl' key={news.datePublished}>
              <div className="flex justify-between mb-3">
                <h3 className='text-[14px] font-semibold'>{news.name}</h3>
                <img src={news?.image?.thumbnail?.contentUrl} alt="img" className='w-20' />
              </div>
              <p className='text-[12px] text-gray-600'>{news.description}</p>
              <div className="flex justify-between">
                <Link to={news.url}>
                  <span className='text-[12px] text-blue-600'>Read More...</span>
                </Link>
                <span className='text-[12px] text-gray-500 mt-4'>{moment(news.datePublished).startOf('minutes').fromNow()}</span>
              </div>
            </div>
        ))}
    </div>
  )
}

export default TopNews