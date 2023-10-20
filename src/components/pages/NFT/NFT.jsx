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
    <div className='container mx-auto mt-20 grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7'>
        {nftTokens.map((items,index) => (
            <div key={items.id}>
                <NFTItems
                    NFTToken = {items}
                />
            </div>
        ))}
    </div>
  )
}

export default NFT