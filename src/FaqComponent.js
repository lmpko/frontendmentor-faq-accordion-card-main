import React from 'react'
import illustration from "/images/illustration-woman-online-mobile.svg"

const FaqComponent = () => {
  return (
    <section>
        <img src={illustration} alt="illustration" />
        <h1>FAQ</h1>
        <div>
            <h2>How many team members can I invite?</h2>
            <p>You can invite up to 2 additional users on the Free plan. There is no limit on 
                team members for the Premium plan.
            </p>
            <h2>What is the maximum file upload size?</h2>
            <p>
                No more than 2GB. All files in your account must fit your allotted storage space.
            </p>
            <h2>How do I reset my password?</h2>
            <p>
                 Click “Forgot password” from the login page or “Change password” from your profile page.
                A reset link will be emailed to you.
            </p>
            <h2>Can I cancel my subscription?</h2>
            <p>
                Yes! Send us a message and we’ll process your request no questions asked.
            </p>
            <h2>Do you provide additional support?</h2>
            <p>
                Chat and email support is available 24/7. Phone lines are open during normal business hours.
            </p>
        </div>
    </section>
  )
}

export default FaqComponent