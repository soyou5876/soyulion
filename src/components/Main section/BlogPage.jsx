import React from 'react';
import line from '../../assets/img/svg/line.svg'
import blog1 from '../../assets/img/png/blog1.png'
import blog2 from '../../assets/img/png/blog2.png'
import blog3 from '../../assets/img/png/blog3.png'
import blog4 from '../../assets/img/png/blog4.png'
import Footer from '../Section/Footer'


const BlogPage = () => {
  return (
    <div className="blogpage_wrap">
      <div className="header">
        <p>BLOG</p>
        <img src={line} alt="" className="line" />
        <span className="tag">Fashion</span>
        <span className="tag">Promo</span>
        <span className="tag">Policy</span>
        <span className="tag">Lookbook</span>
      </div>
      <div className="feed">
        <div className="feed1">
          <img src={blog1} alt="" className="blog1" />
          <div className="word">
            <div className="tags">
              <span className="tag">#Fashion</span>
              <span className="tag">#Tips</span></div>
            <span className="date">4 days ago</span>
          </div>
        </div>
        <div className="feed2">
          <img src={blog2} alt="" className="blog2" />
          <div className="word">
            <div className="tags">
              <span className="tag">#Fashion</span>
              <span className="tag">#Tips</span></div>
            <span className="date">4 days ago</span>
          </div>
        </div>
        <div className="feed3">
          <img src={blog3} alt="" className="blog3" />
          <div className="word">
            <div className="tags">
              <span className="tag">#Fashion</span>
              <span className="tag">#Tips</span></div>
            <span className="date">4 days ago</span>
          </div>
        </div>
        <div className="feed4">
          <img src={blog4} alt="" className="blog4" />
          <div className="word">
            <div className="tags">
              <span className="tag">#Fashion</span>
              <span className="tag">#Tips</span></div>
            <span className="date">4 days ago</span>
          </div>
        </div>
        <button className="load-more-btn">
          <span>LOAD MORE</span>
          <span className="plus">+</span>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
