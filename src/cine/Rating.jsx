import React from 'react'
import Star from '../assets/star.svg'

function Rating({ value }) {
  const star = Array(value).fill(Star);
  return (
    <>
      {
        star.map((star, index) => (
          <img
            key={index}
            src={star}
            width="14"
            height="14"
            alt='Star'
          />
        ))
      }
    </>
  )
}

export default Rating
