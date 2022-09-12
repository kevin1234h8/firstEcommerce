import React from 'react'

const Help = () => {
  return (
    <div className='help-container'>
        <small>WE ARE HERE TO HELP</small>
        <a className='mail' href='https://mail.google.com/mail/u/0/#inbox'>contact@kevin.com</a>
        <div className='shopLearn'>
            <div>
                <div className='gray'>SHOP</div>
                <div className='brand'>
                    <div>Canon</div>
                    <div>Nikon</div>
                    <div>Sony</div>
                    <div>All products</div>
                </div>
            </div>
            
            <div>
                <div className='gray'>LEARN</div>
                <div className='brand'>
                    <div>How to choose</div>
                    <div>About us</div>
                    <div>LAST.paper</div>
                </div>
            </div>
          
        </div>
        <div className='gray'>CUSTOMER SERVICE</div>
        <div className='brand-container'>
            <a href="/">Terms & Conditions</a >
            <a href="/">Privacy Notice</a>
            <a href="/">FAQs</a>
            <a href="/">Secure Payment</a >
            <a href="/">Returns & Refunds</a>
            <a href="/">Delivery Information</a>
        </div>
    </div>
  )
}

export default Help