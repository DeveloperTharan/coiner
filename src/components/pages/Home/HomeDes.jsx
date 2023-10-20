import React from 'react'

function HomeDes() {

    const data = [
        {
            id: 1,
            title: 'What is Crypto Market Cap?',
            desription: `Crypto market cap is the total value of all the coins of a particular cryptocurreny
                that have been mined or are in circulation. Market capitalization is used to determine the 
                ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the higher 
                its ranking and share of the market. Crypto market cap is calculated by multiplying the total 
                number of coins in circulation by its current price. For instance, to calculate the market cap of
                Ethereum, all you need to do is multiply the total number of Ethereum in circulation by the current
                price of one Ethereum and you will get its market cap.`
        },
        {
            id: 2,
            title: 'How to compare Cryptocurrencies Market Cap?',
            desription: `As a financial metric, market cap allows you to compare the total circulating value of one
                cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have a market 
                cap of over $10 billion. They typically consist of protocols that have demonstrated track records, 
                and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as 
                building new projects on top of them. While market cap is a simple and intuitive comparison metric, 
                it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated 
                market cap through price swings and the tokenomics of their supply. As such, it is best to use this 
                metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted 
                valuation, and fundamentals during your research process.`
        },
        {
            id: 3,
            title: 'How does Coiner Calculate Cryptocurrency Prices?',
            desription: `The price is calculated using a global volume-weighted average price formula which is based 
                on the pairings available on different exchanges of a particular crypto asset. For examples and more 
                detailed information on how we track cryptocurrency prices and other metrics, see our methodology 
                page here.`
        },
        {
            id: 4,
            title: 'Where to Check Cryptocurrency Prices?',
            desription: `You can track over 10,000 crypto prices on Coiner across more than 50 currencies. 
                Popular cryptocurrency pairs include BTC-USD, ETH-USD, and SLP-PHP. You can also track metrics 
                such as 24 hour trading volume, market capitalization, price chart, historical performance chart, 
                the circulating supply, and more. Sign up to use Coiner’s crypto portfolio to track the 
                performance of your portfolio. You may also check out GeckoTerminal (currently in beta), our 
                comprehensive multichain on-chain charting tool featuring live charts, current trades, market 
                sentiment and more as it happens in real time! Coiner also has a mobile app that enables you 
                to track cryptocurrencies on Android and iOS.`
        },
        {
            id: 5,
            title: 'What is 24h Volume in the Table Above?',
            desription: `The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on 
                all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume for 
                Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands across all 
                exchanges in the last 24 hours.`
        }
    ]

  return (
    <div className='mt-10 md:mt-32'>
        {data.map((items) => (
            <div key={items.id} className='mb-10'>
                <h1 className='xs:text-sm md:text-xl xl:text-2xl font-bold'>{items.title}</h1>
                <p className='mt-5 xs:text-[12px] lg:text-[13px] xl:text-[14px] text-gray-600'>{items.desription}</p>
            </div>
        ))}
    </div>
  )
}

export default HomeDes