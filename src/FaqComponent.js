import React from 'react'
import illustration from "/images/illustration-woman-online-mobile.svg"
import bgPattern from "/images/bg-pattern-mobile.svg"
import QAcomponent from './QAcomponent'
import { qa } from '../config'


const FaqComponent = () => {
  return (
  <>
    <section className='faq-container'>
        <div className='logo-container'>
            <img src={illustration} alt="illustration" />
            <img src={bgPattern} alt="bg" />
        </div>
        <h1>FAQ</h1>
        <div className='qa-container'>
            {qa.map((qa,index) => <QAcomponent qa={qa} key={qa.id}/>) }
        </div>
    </section>
  </>
  )
}

export default FaqComponent