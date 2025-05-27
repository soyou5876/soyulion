import React from 'react'
import footer_logo from '../../assets/img/footer_logo.png'

const Footer = () => {
    return (
        <div className='Footer_wrap'>
            <div className="left">
                <img src={footer_logo} alt="" />
            
                <div className='text1'>
                    <h3>매장안내</h3>
                    <p>|</p>
                    <h3>공지사항</h3>
                    <p>|</p>
                    <h3>FILA MEMBERSHIP</h3>
                    <p>|</p>
                    <h3>단체 판매</h3>
                    <p>|</p>
                    <h3>대리점 새설문의</h3>
                    <p>|</p>
                    <h3>FLIA 입찰 참여 안내</h3>
                </div>
                <div className='text2-1'><p>서울특별시 성북구 보문로 35 휠라코리아(주)</p> <h3>대표이사 : 김지헌</h3></div>
                <div className='text2-2'><p>사업자등록번호 : 716-81-01573</p> <h3>사업자 정보확인</h3> <p>통신판매업신고 : 제 2020-서울강동-0160 호</p></div>
                <div className='text2-3'><p>개인정보 관리책입자 : 이학우</p></div>

                <div className='text3-1'><p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.<br />
                콘텐츠산업진흥법에 의한 콘텐츠보호안내</p><h3>자세히보기</h3></div>

                <div className='text3-2
                '><h3>통합회원 이용약관</h3>
                    <p>|</p>
                    <h2>개인정보 처리방침</h2>
                    <p>|</p>
                    <h3>제보센터</h3></div>
                    

         </div>
            <div className='right'>
                <div className="cs">CS CENTER</div>
                <div className="call"><p>1577-3472</p>
                <p>filaonline@fila.com</p></div>
                <div className="time">평일 월-금 : 9시 - 18시(공휴일 제외)</div>
                <div className="bottom"><p>KOREA</p>
                <h3>FAMILY SITE</h3></div>
            </div>
        </div>
    )
}

export default Footer
