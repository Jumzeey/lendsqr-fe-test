import React from 'react';
import SearchInput from '../../ui/SearchInput';
import logo from '@/assets/lendsqrlogo.svg'
import notify from '@/assets/notification.svg'
import profile from '@/assets/profile.svg'
import down from '@/assets/down.svg'
import './index.scss';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className='navbar__left'>
        <div className="navbar__logo">
          <img src={logo} alt="Lendsqr Logo" />
        </div>
        <div className="navbar__search">
          <SearchInput placeholder="Search for anything" />
        </div>
      </div>

      <div className="navbar__right">
        <a href="#">Docs</a>
        <span className="notifications">
          <img src={notify} alt="notification-icon" />
        </span>
        <div className="profile">
          <img src={profile} alt="Profile" className='profile_image' />
          <div className='label'>
            <span>Adedeji</span>
            <span><img src={down} alt="icon" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
