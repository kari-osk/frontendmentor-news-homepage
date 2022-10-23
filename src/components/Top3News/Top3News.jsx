import React from 'react'
import { newsWithImage } from '../../data'

const Card = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt={data.title} />
      <h3>{data.cod}</h3>
      <h3>{data.title}</h3>
      <h3>{data.paragraph}</h3>
    </div>
  )
}

const Top3News = () => {
  return (
    <div>
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
