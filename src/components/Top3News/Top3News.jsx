import React from 'react'
import { newsWithImage } from '../../data'

const Card = ({ data }) => {
  return (
    <div className='flex flex-row'>
      <img className='w-[100px] h-full object-cover' src={data.image} alt={data.title} />
      <div className='text-left pl-3 pr-3'>
        <h2 className='text-3xl font-bold text-light-gray'>{data.cod}</h2>
        <h3 className='text-base font-bold'>{data.title}</h3>
        <p className='text-base text-dark-gray'>{data.paragraph}</p>
      </div>
    </div>
  )
}

const Top3News = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
      {
        newsWithImage.map(data => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))
      }
    </section>
  )
}

export default Top3News
