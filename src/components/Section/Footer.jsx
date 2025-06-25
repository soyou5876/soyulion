import React from 'react'
import { useNavigate } from 'react-router-dom';
import line from '../../assets/img/svg/line.svg'
import logogroup from '../../assets/img/svg/logogroup.svg'


const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <img src={logogroup} alt="" className="logogroup" />
      <img src={line} alt="" className="line" />
      <p>support@openui.design<br />
        +60 825 876<br />
        08:00 - 22:00 - Everyday
      </p>
      <img src={line} alt="" className="line" />
      <div className="menu">
        <p>About</p>
        <p onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
          Contact
        </p>

        <p onClick={() => navigate('/blog')} style={{ cursor: 'pointer' }}>
          Blog
        </p>
      </div>
      <div className="bottom">
        <p>Copyright© OpenUI All Rights Reserved.</p>
      </div>
    </div>

  )
}

export default Footer
