import React from 'react';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import './Topbar.css';
import logoimg from './assets/logo.png'

const Header = () => {
  return (
    
    <div className="header">
      <img src={logoimg} alt="" width="70px" className='logopng' />
      <div className="logo">Bass Beat</div>
      <div className='align'>
      <div className="search-bar">
        <SearchOutlined className="search-icon" />
        <input type="text" placeholder="What do you want to play?" />
      </div>
      </div>
      
      <button className="premium-button">Explore Premium</button>
      <div className="icon-container">
        <BellOutlined className="icon" />
        <UserOutlined className="icon" />
        <div className="user-initial">V</div>
      </div>
    </div>
  );
};

export default Header;


