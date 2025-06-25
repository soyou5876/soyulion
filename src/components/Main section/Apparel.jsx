import React from 'react'
import Down from '../../assets/img/svg/Down.svg'
import gridview from '../../assets/img/svg/grid view.svg'
import filter from '../../assets/img/svg/Filter.svg'
import detail from '../../assets/img/png/detail.png'
import Frame_0 from '../../assets/img/png/Frame 18 (0).png'
import Frame_1 from '../../assets/img/png/Frame 18 (1).png'
import Frame_2 from '../../assets/img/png/Frame 18 (2).png'
import Frame_3 from '../../assets/img/png/Frame 18 (3).png'
import Frame_4 from '../../assets/img/png/Frame 18 (4).png'
import Frame_5 from '../../assets/img/png/Frame 18 (5).png'
import Frame_6 from '../../assets/img/png/Frame 18 (6).png'
import Frame_7 from '../../assets/img/png/Frame 18 (7).png'
import Frame_8 from '../../assets/img/png/Frame 18 (8).png'
import Frame_9 from '../../assets/img/png/Frame 18 (9).png'
import Footer from '../Section/Footer'


const Apparel = () => {
    return (
        <div className='apparel_wrap'>
            <div className="header">
                <div className="sec1">
                    <p>4500 APPAREL</p></div>
                <div className="sec2">
                    <div className="btn1">
                        <p>New</p>
                        <img src={Down} alt="" className="down" />
                    </div>
                    <div className="btn2">
                        <img src={gridview} alt="" className="grid" />
                    </div>
                    <div className="btn3">
                        <img src={filter} alt="" className="filter" />
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="box">
                    <img src={Frame_0} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_1} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_2} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_3} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_4} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_5} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_6} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_7} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_8} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
                <div className="box">
                    <img src={Frame_9} alt="" className="box1" />
                    <img src={detail} alt="" className="detail" />
                </div>
            </div>
            <div className="number">
                <span className="pageb">1</span>
                <span className="page">2</span>
                <span className="page">3</span>
                <span className="page">4</span>
                <span className="page">5</span>
                <span className="arrow">&gt;</span>
            </div>
            <Footer />
        </div>

    )
}

export default Apparel
