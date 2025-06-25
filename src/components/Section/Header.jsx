import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/img/svg/Logo.svg'
import Menu from '../../assets/img/svg/Menu.svg'
import Search from '../../assets/img/svg/Search.svg'
import shoppingbag from '../../assets/img/svg/shopping bag.svg'

import { useNavigate } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPage = location.pathname === '/blog';
  const isApparelPage = location.pathname === '/apparel';
  const isCheckoutPage = location.pathname === '/checkout';
  const isContactPage = location.pathname === '/contact';


  return (
    <div className={`Header_wrap ${isBlogPage ? 'blog' : ''} ${isApparelPage ? 'apparel' : ''} ${isCheckoutPage ? 'checkout' : ''} ${isContactPage ? 'contact' : ''}`}>
      <div className="header">
        <img
          src={Menu}
          alt="menu"
          className="Menu"
          onClick={() => navigate('/menu')}
        />
        <img src={Logo} alt="" className="Logo" />
        <div className="btns">
          <img src={Search} alt="" className="Search"
            onClick={() => navigate('/search')} />
          <img
            src={shoppingbag}
            alt=""
            className="sb"
            onClick={() => navigate('/checkout')}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
