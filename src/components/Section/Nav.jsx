import React from 'react'
import Logo from '../../assets/img/fila_logo.png'
import location from '../../assets/img/location.png'
import mypage from '../../assets/img/mypage.png'
import search from '../../assets/img/search.png'
import cart from '../../assets/img/cart.png'


const Nav = () => {
  return (
    <div className='Nav_wrap'>
        <div className='logo'>
            <img src={Logo} alt=""/>
        </div>
        
        <ul>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>KIDS</li>
            <li>|</li>
            <li>TENNIS</li>
            <li>BRAND</li>
        </ul>
        <div className='menu'>
        <img src={location} alt=""  />
        <img src={mypage} alt=""  />
        <img src={search} alt=""  />
        <img src={cart} alt=""  />
        </div>
    </div>
  )
}

export default Nav
