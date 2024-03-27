import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

import './index.css';

const Footer=()=>{
    return(
        <div className="footer-container">
            <div className="footer1">
                <span className="">
                    <p className="footer-headers">Temples of India</p>
                    <img src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png" alt="" className="footer-logo" />
                </span>
                <p>World's Largest Hindu Temples Portal.</p>
            </div>
            <div className="footer2">
                <p className="footer-headers">Quick Links</p>
                <ul className="footer-quicklinks">
                    <li className=""><a href="/" className="">Home</a></li>
                    <li className=""><a href="/" className="">About Us</a></li>
                    <li className=""><a href="/" className="">Nearby Temples</a></li>
                    <li className=""><a href="/" className="">Download App</a></li>
                    <li className=""><a href="/" className="">Donate to Us</a></li>
                </ul>
            </div>
            <div className="footer3">
            <p className="footer-headers">Search Temples</p>
                <ul className="footer-searchTemples">
                    <li className=""><a href="/" className="">Watch Video</a></li>
                    <li className=""><a href="/" className="">Disclaimer</a></li>
                    <li className=""><a href="/" className="">Our Blog</a></li>
                    <li className=""><a href="/" className="">Donate for Dharma</a></li>
                   
                </ul>
            </div>
            <div className="footer4">
                <ul className="">
                    <li style={{ color: '#1cbeeb' }} ><FaTwitter className="footer-icons" /></li>
                    <li style={{ color: '#1cbeeb' }} > <FaInstagram className="footer-icons" /></li>
                    <li style={{ color: '#1cbeeb' }} ><FaFacebookSquare className="footer-icons" /></li>
                    <li style={{ color: '#1cbeeb' }} ><SiLinkedin className="footer-icons" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;