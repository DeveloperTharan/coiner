import React from 'react'
import TrendingCoins from './TrendingCoins'
import CoinTable from './CoinTable'
import TopNews from './TopNews'
import HomeDes from './HomeDes'

function Home() {

  return (
    <div className='bg-gray-50'>
      <div className='container md:mx-auto'>
        <TrendingCoins />
        <CoinTable /> 
        <TopNews />
        <HomeDes />
      </div>
    </div>
  )
}

export default Home