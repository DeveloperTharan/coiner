import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NFTItems from './NFTItems';

const nfts = {
    method: 'GET',
  url: 'https://opensea-nft.p.rapidapi.com/assets/',
  params: {
    collection_slug: 'cryptopunks',
    order_direction: 'desc',
    include_orders: 'false'
  },
  headers: {
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'opensea-nft.p.rapidapi.com'
  }
};

function NFT() {

    const [nftTokens, setNftTokens] = useState([]);

    useEffect(() => {
        fetchNftTokens();
    },[]);

    const fetchNftTokens = () => {
        axios.request(nfts).then((resp) => {
            /* console.log(resp); */
            setNftTokens(resp.data.assets)
        })
    }
    /* console.log(nftTokens); */

  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-16'>Top NFT's</h1>
      <p className='text-[14px] text-gray-600 text-center lg:w-[30%] mx-auto mt-2'>The NFT's are non-funchable tokens that are unique and non-replacable and also it is new and growing asset's</p>
      <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {nftTokens.map((items,index) => (
            <div key={items.id}>
                <NFTItems
                    NFTToken = {items}
                />
            </div>
        ))}
      </div>
    </div>
  )
}

export default NFT