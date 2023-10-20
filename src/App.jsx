import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MarketDetails from './components/MarketDetails/MarketDetails/'
import Home from './components/pages/Home/Home'
import Exchanges from './components/pages/Exchanges/Exchanges'
import CryptoCurrencies from './components/pages/Cryptos/CryptoCurrencies'
import CryptoDetails from './components/pages/Cryptos/CryptoDetails'
import NFT from './components/pages/NFT/NFT'
import News from './components/pages/News/News'
import Footer_fot from './components/Footer_fot'

function App() {
  return (
    <>
      <BrowserRouter>
        <MarketDetails/>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/cryptocurrencies' element={<CryptoCurrencies />} />
          <Route exact path='/exchanges' element={<Exchanges />} />
          <Route exact path='/nfts' element={<NFT />} />
          <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
          <Route exact path='/news' element={<News />} />
        </Routes>
        <Footer_fot/>
      </BrowserRouter>  
    </>
  )
}

export default App
