import React from 'react'
import sec03_1 from '../../assets/img/sec03_1.png'
import sec03_2 from '../../assets/img/sec03_2.png'

const Section03 = () => {
    return (
        <div className='Section03_wrap'>
            <div>
                <h3>기획전</h3>
            </div>
            <div className='main_03'>
                <div>
                    <img src={sec03_1} alt="" />
                    <div className="text">FILA CUSTOM STUDIO</div>
                    <button className="detail_btn">자세히보기</button>
                </div>
                <div>
                    <img src={sec03_2} alt="" />
                    <div className="text">Pertex LIfe</div>
                    <button className="detail_btn">자세히보기</button>
                </div>
            </div>
        </div>
    )
}

export default Section03
