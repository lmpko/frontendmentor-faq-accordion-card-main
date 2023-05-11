import React, {useState} from 'react'
import illustration from "/images/illustration-woman-online-mobile.svg"
import bgPattern from "/images/bg-pattern-mobile.svg"
import QAcomponent from './QAcomponent'
import { qa } from '../config'


const FaqComponent = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  return (
  <>
    <section className='faq-container'>
        <div className='logo-container'>
            <img src={illustration} alt="illustration" />
            <img src={bgPattern} alt="bg" />
        </div>
        <h1>FAQ</h1>
        <div className='qa-container'>
            {qa.map((qa,index) => <QAcomponent qa={qa} key={qa.id}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex} />) }
        </div>
    </section>
  </>
  )
}

export default FaqComponent