import React from 'react'
import line from '../../assets/img/svg/line.svg'
import Frame_1 from '../../assets/img/png/Frame 18 (1).png'
import checkoutdetail from '../../assets/img/png/checkoutdetail.png'
import Line2 from '../../assets/img/svg/Line2.svg'
import Voucher from '../../assets/img/svg/Voucher.svg'
import Door from '../../assets/img/svg/Door.svg'
import shoppingbox from '../../assets/img/svg/shopping bag.svg'

const Checkout = () => {
    return (
        <div className='checkout_wrap'>
            <div className="cheader">
                <h2>CHECKOUT</h2>
                <img src={line} alt="" className="line" />
            </div>
            <div className="item">
                <img src={Frame_1} alt="" className="box1" />
                <img src={checkoutdetail} alt="" className="detail" />
            </div>
            <div className="promo">
                <img src={Line2} alt="" className="line2" />
                <div className="code1">
                    <img src={Voucher} alt="" className="voucher" />
                    <p>Add prome code</p>
                </div>
                <img src={Line2} alt="" className="line2" />
                <div className="code">
                    <div className="deli">
                        <img src={Door} alt="" className="door" />
                        <p>Delivery</p></div>
                    <p>Free</p>
                </div>
                <img src={Line2} alt="" className="line2" />
            </div>
            <div className="cfooter">
                <div className="total">
                    <span className="tag1">EST. TOTAL</span>
                    <span className="tag2">$240</span>
                </div>
                <div className="checkbox">
                    <img src={shoppingbox} alt="" className="sb" />
                    <p>CHECKOUT</p>
                </div>
            </div>

        </div>
    )
}

export default Checkout
