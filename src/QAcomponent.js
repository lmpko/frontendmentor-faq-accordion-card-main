import React from 'react'
import arrow from "/images/icon-arrow-down.svg"

const QAcomponent = ({qa}) => {
  return (
    <div className='wall'>
        <div className='question'>
            <h2>{qa?.question }</h2>
            <img src={arrow} alt="arrow-icon"/>
        </div>
        <p>
          {qa?.answer}
        </p>
    </div>
  )
}

export default QAcomponent