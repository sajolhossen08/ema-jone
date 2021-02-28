import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt=""/>
            <div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
        </div>
    );
};

export default Header;