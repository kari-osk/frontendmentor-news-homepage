import React from 'react'
import { news } from '../../data'

const NewsCard = ({ data }) => {
  return (
    <div className='text-left'>
      <h3>{data.title}</h3>
      <p>{data.paragraph}</p>
    </div>
  )
}

const SideNew = () => {
  return (
    <div>
      <h2>New</h2>
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
