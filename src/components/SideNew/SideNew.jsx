import React from 'react'
import { news } from '../../data'

const NewsCard = ({ data }) => {
  return (
    <div className=''>
      <h3 className='text-xl pt-2'>{data.title}</h3>
      <p className='text-base text-light-gray pt-3 pb-4'>{data.paragraph}</p>
      <hr />
    </div>
  )
}

const SideNew = () => {
  return (
    <div className='w-[352px] text-left bg-blue text-light p-4'>
      <h2 className='text-bold text-yellow text-3xl'>New</h2>
      {
        news.map(data => (
          <div key={data.id}>
            <NewsCard data={data} />
          </div>
        ))
      }

    </div>
  )
}

export default SideNew
