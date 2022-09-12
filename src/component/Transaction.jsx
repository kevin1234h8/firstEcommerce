import React from 'react'
import paypal from './paypal.svg'
import visa from './visa-credit-card.svg'
import masterCard from './mastercard.svg'
const Transaction = () => {
  return (
    <div className='transaction-container'>
        <div className='gray'>SAFE TRANSACTION</div>
        <div className='icon'>
            <a href='https://paypal.com'><img src={paypal} width='30px' alt="" /></a>
            <a href='https://www.mastercard.us/en-us.html'><img src={masterCard} width='50px' alt="" /></a>
            <a href='https://usa.visa.com/'><img src={visa} width='50px' alt="" /></a>
        </div>
        <div className='express'>EXPRESS DELIVERY</div>
        <img src="https://1000logos.net/wp-content/uploads/2020/09/DPD-Logo-768x480.jpg" width="70px" alt="" />
    </div>
  )
}

export default Transaction