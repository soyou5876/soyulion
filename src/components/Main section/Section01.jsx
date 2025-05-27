import React, { useEffect, useState } from 'react'
import section01_1 from '../../assets/img/section01_1.png'
import section01_2 from '../../assets/img/section01_2.png'
import section01_3 from '../../assets/img/section01_3.png'
import section01_4 from '../../assets/img/section01_4.png'
import section01_5 from '../../assets/img/section01_5.png'

const Section01 = () => {
  const images = [section01_1, section01_2, section01_3, section01_4, section01_5]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='Section01_wrap'>
      <img src={images[currentIndex]} alt={`section01_${currentIndex + 1}`} className="section01_img" />
    </div>
  )
}

export default Section01
