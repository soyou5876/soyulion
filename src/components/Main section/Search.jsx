import React from 'react'
import SearchIcon from '../../assets/img/svg/Search.svg'
import Delete from '../../assets/img/svg/Delete.svg'
import Line2 from '../../assets/img/svg/Line2.svg'

const Search = () => {
    return (
        <div className='search_wrap'>
            <div className="input">
                <div className="left">
                    <img src={SearchIcon} alt="" className="Searchicon" />
                    <p>Search items</p></div>
                <div className="right">
                    <img src={Delete} alt="" className="delete" />
                </div>
            </div>
            <img src={Line2} alt="" className="line2" />
            <div className="text">
            <h3>Popular search terms</h3>
            <p>Trend</p>
            <p>Dress</p>
            <p>Bag</p>
            <p>Tshirt</p>
            <p>Beauty</p>
            <p>Accessories</p>
            </div>
        </div>
    )
}

export default Search 
