import React from 'react'
import Line from '../../assets/img/svg/line.svg'
import Cm from '../../assets/img/png/Chat Message.png'
import Am from '../../assets/img/png/Add Message.png'
import tw from '../../assets/img/png/Twitter.png'
import Footer from '../Section/Footer'

const Contact = () => {
  return (
    <div className='contact_wrap'>
      <div className="us">
        <h3>CONTACT US</h3>
        <img src={Line} alt="" className="line" />
      </div>
      <div className="cbox">
        <img src={Cm} alt="" className="cm" />
        <p>Need an ASAP answer? Contact us via chat,<br /> 24/7! For existing furniture orders, please<br/> call us.</p>
        <div className="blackbox">
            <p>Chat with us</p>
        </div>
      </div>
       <div className="cbox">
        <img src={Am} alt="" className="am" />
        <p>You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.</p>
        <div className="blackbox">
            <p>text us</p>
        </div>
      </div>
      <div className="cbox">
        <img src={tw} alt="" className="tw" />
        <p>To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
