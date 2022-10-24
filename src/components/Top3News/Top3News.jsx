import React from 'react'
import { newsWithImage } from '../../data'

const Card = ({ data }) => {
  return (
    <div className='w-[354px] flex flex-row'>
      <img className='w-[100px] h-[127px] object-cover' src={data.image} alt={data.title} />
      <div className='text-left pl-3 pr-3'>
        <h2 className='text-3xl text-light-gray'>{data.cod}</h2>
        <h3 className='text-base text-bold'>{data.title}</h3>
        <p className='text-base text-dark-gray'>{data.paragraph}</p>
      </div>
    </div>
  )
}

const Top3News = () => {
  return (
    <div className='w-full flex flex-wrap gap-4 pt-4 pb-4'>
      {
        newsWithImage.map(data => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))
      }
    </div>
  )
}

export default Top3News
