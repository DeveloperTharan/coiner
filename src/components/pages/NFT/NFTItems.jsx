import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, } from "@material-tailwind/react";

function NFTItems({NFTToken}) {
  return (
      <Card className="my-5 w-64">
        <CardHeader floated={false} className="h-full">
          <img src={NFTToken.image_url} alt="img" className='w-full' />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray">
            {NFTToken.name}
          </Typography>
        </CardBody>
        <CardFooter>
          <div className='flex justify-between mb-2'>
              <span className='text-gray-400'>ID</span>
              <span className='text-gray-400'>Chain</span>
              <span className='text-gray-400'>Price</span>
              <span className='text-gray-400'>24h Volume</span>
          </div>
          <hr className='mx-auto w-full mb-3' />
          <div className='mt-1 flex justify-between'>
              <span className='text-[14px]'>#{NFTToken.token_id}</span>
              <span className='text-[14px]'>{NFTToken.asset_contract.chain_identifier}</span>
              <span className='text-[14px]'>{Math.floor(Math.random() * 1000) + 1}</span>
              <span className='text-[14px]'>{(Math.random() * 1).toFixed(2)}ETH</span>            
          </div> 
        </CardFooter>
      </Card>
  )
}

export default NFTItems

{/* 
        
        */}