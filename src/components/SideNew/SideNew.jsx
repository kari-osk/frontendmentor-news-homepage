import React from 'react'
import { news } from '../../data'

const NewsCard = ({ data }) => {
  return (
    <div>
      <div className='min-h-[130px]'>
        <h3 className='text-xl pt-2'>{data.title}</h3>
        <p className='text-base text-light-gray pt-3 pb-4'>{data.paragraph}</p>
      </div>
      <div className='text-dark-gray pb-4'>
        {data.line
          ?
          <hr />
          :
          " "
        }
      </div>
    </div >
  )
}

const SideNew = () => {
  return (
    <aside className='w-full text-left bg-blue text-light pt-4 px-4'>
      <h2 className='font-bold text-yellow text-3xl'>New</h2>
      {
        news.map(data => (
          <div key={data.id}>
            <NewsCard data={data} />
          </div>
        ))
      }

    </aside>
  )
}

export default SideNew
