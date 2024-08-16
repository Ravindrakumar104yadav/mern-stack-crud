import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Conference Management System. All rights reserved.</p>
            <ul className='footer-links'>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/privacy'>Privacy Policy</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
