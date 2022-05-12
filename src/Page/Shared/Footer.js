import React from 'react';
import footer from '../../assets/images/footer.png';


const Footer = () => {
    return (
        <div style={{background: `url(${footer})`, backgroundSize: 'cover'}}>
            <footer class="footer p-10 bg-base-100 text-base-content justify-around">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer class="footer footer-center p-4 bg-base-100 text-base-content">
                <div>
                    <p> This website is design and deploy by <a className='font-bold' href="https://www.linkedin.com/in/emrul-kayes-b61895237/"> Emrul Kayes </a> for educational purpose. </p>
                    <p> Copyright 2022 All Rights Reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;