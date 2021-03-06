import React from 'react';
import footer from '../../assets/images/footer.png';


const Footer = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10 bg-base-100 text-base-content justify-around">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <div>
                    <p> This website is design and deploy by <a className='font-bold' href="https://www.linkedin.com/in/emrul-kayes-b61895237/"> Emrul Kayes </a> for educational purpose. </p>
                    <p> Copyright 2022 All Rights Reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;