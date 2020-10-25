import React from 'react';

import './header.styles.scss';

import search from '../../assets/Search.png';
import notification from '../../assets/Group (2).png';
import dp from '../../assets/dp.png';



const Header = () => {

    const navSlide = () => {
        const nav = document.querySelector('.sidebar');
        const header = document.querySelector('.header');
        const burger = document.querySelector('.burger');
      
        // Toggle nav
        nav.classList.toggle('nav-active');
        header.classList.toggle('burger-active');
        
        // Animate the burger button
        burger.classList.toggle('toggleBurger');
    }

    return(
        <div className='header'>
            <div className="header-burger-logo">
                <div className="burger" onClick={ navSlide }>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <h2 className='header-left'>TransMonitor</h2>
            </div>
            <div className="header-main">
                <form className='header-middle'>
                    <div className="search-icon"><img src={search} alt="search-icon"/></div>
                    <input type="search" name="s" id="s" placeholder='Search...'/>
                </form>
                <div className="header-right">
                    <ul className='header-link'>
                        <li><a href='#!'>Support</a></li>
                        <li><a href='#!'>FAQ</a></li>
                        <li><img src={notification} alt="notification"/></li>
                    </ul>
                    <div className="profile">
                        <div className="name-and-greeting">
                            <span className='greeting'>Hello</span>
                            <span>Oluwaleke Ojo</span>
                        </div>
                        <div className="profile-pic"><img src={dp} alt="dp"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;