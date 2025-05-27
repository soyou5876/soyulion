import React, { useRef, useEffect } from 'react'
import sec02_1 from '../../assets/img/sec02_1.png'
import sec02_2 from '../../assets/img/sec02_2.png'
import sec02_3 from '../../assets/img/sec02_3.png'
import sec02_4 from '../../assets/img/sec02_4.png'
import sec02_5 from '../../assets/img/sec02_5.png'
import sec02_6 from '../../assets/img/sec02_6.png'
import sec02_7 from '../../assets/img/sec02_7.png'
import heart from '../../assets/img/heart.png'

const Section02 = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  const allProducts = [
    sec02_1, sec02_2, sec02_3, sec02_4, sec02_5, sec02_6, sec02_7
  ]

  return (
    <div className='Section02_wrap'>
      <div>
        <h2>지금 많이 찾는 상품</h2>
      </div>

      <div className="hashtags">
        <p className="hashtag">#냉감티셔츠</p>
        <h3 className="hashtag">#에샤페</h3>
        <h3 className="hashtag">#반팔티셔츠</h3>
        <h3 className="hashtag">#페이토&샌들</h3>
        <h3 className="hashtag">#인터런</h3>
      </div>

      <div className="scroll-wrap" ref={scrollRef}>
        <div className="product-row">
          {allProducts.map((imgSrc, index) => (
            <div key={index} className="product-card">
              <img src={imgSrc} alt={`product_${index}`} />
              <h3>공용   컴포트핏   라이프스타일</h3>
              <div className='text'>COLD WAVE 그래픽 프린트 냉감 티셔츠</div>
              <div className='cost'>
                49,000원 <img src={heart} alt="heart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section02



