import React from 'react'

function NFTItems({NFTToken}) {
  return (
    <div className='shadow-2xl px-4 py-4'>
        <img src={NFTToken.image_url} alt="img" className='w-50' />
        <h2 className='my-5 text-xl text-center font-semibold text-gray-700'>{NFTToken.name}</h2>
        <hr className='mx-auto w-full mb-3' />
        <div className='flex justify-between mb-2'>
            <span className='text-gray-400'>ID</span>
            <span className='text-gray-400'>Chain</span>
            <span className='text-gray-400'>Price</span>
            <span className='text-gray-400'>24h Volume</span>
        </div>
        <div className='mt-1 flex justify-between'>
            <span className='text-[14px]'>#{NFTToken.token_id}</span>
            <span className='text-[14px]'>{NFTToken.asset_contract.chain_identifier}</span>
            <span className='text-[14px]'>{Math.floor(Math.random() * 1000) + 1}</span>
            <span className='text-[14px]'>{(Math.random() * 1).toFixed(2)}ETH</span>            
        </div>
    </div>
  )
}

export default NFTItems