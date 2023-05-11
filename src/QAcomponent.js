import React from 'react'
import arrow from "/images/icon-arrow-down.svg"

const QAcomponent = ({qa, index, activeIndex, setActiveIndex}) => {

  const handleClick = () => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='wall'>
        <div className={`question ${index === activeIndex ? 'active' : ''}`} onClick={handleClick}>
            <h2>{qa?.question }</h2>
            <img src={arrow} alt="arrow-icon"/>
        </div>
        <span>
          {index === activeIndex ? <p>{qa.answer}</p> : null}
        </span>
    </div>
  )
}

export default QAcomponent