import React, {useState} from 'react'
import QAcomponent from './QAcomponent'
import { qa } from '../config'


const FaqComponent = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  return (
  <>
    <section className='faq-container'>
        <div className='logo-container'>
            
        </div>
        <div className='faq-big-container'>
          <h1>FAQ</h1>
          <div className='qa-container'>
              {qa.map((qa,index) => <QAcomponent qa={qa} key={qa.id}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />) }
          </div>
        </div>
        
    </section>
  </>
  )
}

export default FaqComponent