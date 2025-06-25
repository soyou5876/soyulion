import React from 'react'
import Forward from '../../assets/img/svg/Forward.svg'
import call from '../../assets/img/svg/Call.svg'
import location from '../../assets/img/svg/Location.svg'
import line from '../../assets/img/svg/line.svg'
import logogroup from '../../assets/img/svg/logogroup.svg'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate(); 
    return (
        <div className="menu-page">
            <button onClick={() => window.history.back()} className="close-btn">×</button>
            <div className="section">
                <span className="item">WOMEN</span>
                <span className="item">MAN</span>
                <span className="item">KIDS</span>
            </div>
            <div className="choice">
                <div className="box">
                    <p>New</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
                <div className="box" onClick={() => navigate('/apparel')}>
                    <p>Apparel</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
                <div className="box">
                    <p>Bag</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
                <div className="box">
                    <p>Shoes</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
                <div className="box">
                    <p>Beauty</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
                <div className="box">
                    <p>Accessories</p>
                    <img src={Forward} alt="" className="forward" />
                </div>
            </div>
            <div className="call">
                <img src={call} alt="" className="callimg" />
                <p>(786) 713-8616</p>
            </div>
            <div className="location">
                <img src={location} alt="" className="loc" />
                <p>Store locator</p>
            </div>
            <div className="bottom">
                <img src={line} alt="" className="line" />
                <img src={logogroup} alt="" className="logogroup" />
            </div>
        </div>
    );
};

export default Menu;
