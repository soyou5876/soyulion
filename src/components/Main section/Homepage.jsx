import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import hp1 from '../../assets/img/png/hp1.png'
import Title from '../../assets/img/svg/Title.svg'
import Group from '../../assets/img/svg/Group 12.svg'
import page2_1 from '../../assets/img/png/page2_1.png'
import page2_2 from '../../assets/img/png/page2_2.png'
import page2_3 from '../../assets/img/png/page2_3.png'
import page2_4 from '../../assets/img/png/page2_4.png'
import ForwardArrow from '../../assets/img/svg/Forward Arrow.svg'
import brand from '../../assets/img/png/Brand.png'
import page3_1 from '../../assets/img/png/page3_1.png'
import page3_2 from '../../assets/img/png/page3_2.png'
import page3_3 from '../../assets/img/png/page3_3.png'
import line from '../../assets/img/svg/line.svg'
import page4 from '../../assets/img/png/page4.png'
import indicator from '../../assets/img/svg/Indicator.svg'
import page5_logo from '../../assets/img/svg/page5_logo.svg'
import p5sti_1 from '../../assets/img/svg/p5sti_1.svg'
import p5sti_2 from '../../assets/img/svg/p5sti_2.svg'
import p5sti_3 from '../../assets/img/svg/p5sti_3.svg'
import p5sti_4 from '../../assets/img/svg/p5sti_4.svg'
import p5_logo2 from '../../assets/img/svg/p5_logo2.svg'
import instagram from '../../assets/img/svg/Instagram.svg'
import Group257 from '../../assets/img/png/Group 257.png'
import Group258 from '../../assets/img/png/Group 258.png'
import Group259 from '../../assets/img/png/Group 259.png'
import Group260 from '../../assets/img/png/Group 260.png'
import Footer from '../Section/Footer'



const Homepage = () => {
  const navigate = useNavigate();


  return (

    <div className="Homepage_wrap">
      <div className="page1">
        <img src={hp1} alt="" className="hp1" />
        <p>LUXURY<br />
          FASHION<br />
          &ACCESSORIES</p>
        <button className="pbtn1">EXPLORE COLLECTION</button>
        <img src={Group} alt="" className="group" />
      </div>

      <div className="page2">
        <div className="title">
          <img src={Title} alt="" className="title" />
        </div>
        <div className="menu">
          <span className="item">All</span>
          <span className="item">Apparel</span>
          <span className="item">Dress</span>
          <span className="item">Tshirt</span>
          <span className="item">Bag</span>
        </div>
        <div className="picture1">
          <img src={page2_1} alt="" className="img1" />
          <img src={page2_2} alt="" className="img2" />
        </div> <div className="picture2">
          <img src={page2_3} alt="" className="img3" />
          <img src={page2_4} alt="" className="img4" />
        </div>
        <div className="click">
          <h1>Explore More</h1>
          <img src={ForwardArrow} alt="" className="ForwardArrow" />
        </div>
        <img src={brand} alt="" className="brand" />
      </div>
      <div className="page3">
        <h3>COLLECTIONS</h3>
        <img src={page3_1} alt="" className="page3_1" />
        <img src={page3_2} alt="" className="page3_2" />
        <img src={page3_3} alt="" className="page3_3" />
      </div>
      <div className="page4">
        <h3>JUST FOR YOU</h3>
        <img src={line} alt="" className="line" />
        <div className="picture">
          <img src={page2_2} alt="" className="img2" />
          <img src={page4} alt="" className="page4" /></div>
        <img src={indicator} alt="" className="indicator" />
        <div className="trending">
          <h3>@TRENDING</h3>
          <div className="hashtags">
            <span className="tag">#2021</span>
            <span className="tag">#spring</span>
            <span className="tag">#collection</span>
            <span className="tag">#fall</span>
            <span className="tag">#dress</span>
            <span className="tag">#autumncollection</span>
            <span className="tag">#openfashion</span>
          </div>
        </div>
      </div>
      <div className="page5">
        <img src={page5_logo} alt="" className="page5_logo" />
        <p className="detail">
          Making a luxurious lifestyle accessible<br />
          for a generous group of women is our daily drive.
        </p>
        <img src={line} alt="" className="line" />
        <div className="sec1">
          <div className="sticker1">
            <img src={p5sti_1} alt="" className="sti1" />
            <p>Fast shipping. Free on<br />orders over $25.</p></div>
          <div className="sticker2">
            <img src={p5sti_2} alt="" className="sti2" />
            <p>Sustainable process<br />from start to finish.</p></div>
        </div>
        <div className="sec2">
          <div className="sticker3">
            <img src={p5sti_3} alt="" className="sti3" />
            <p>Unique designs<br />and high-quality materials.</p></div>
          <div className="sticker4">
            <img src={p5sti_4} alt="" className="sti4" />
            <p>Unique designs<br />and high-quality materials.</p></div>
        </div>
        <img src={p5_logo2} alt="" className="logo2" />
      </div>
      <div className="page6">
        <h3>FOLLOW US</h3>
        <img src={instagram} alt="" className="insta" />
        <div className="sec1">
          <img src={Group257} alt="" className="img1" />
          <img src={Group258} alt="" className="img2" />
        </div>
        <div className="sec2">
          <img src={Group259} alt="" className="img3" />
          <img src={Group260} alt="" className="img4" />
        </div>
      <Footer />
      </div>
      </div>


  )
}

export default Homepage
