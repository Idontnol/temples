// import {Link} from 'react-router-dom';
import { MdAddLocation } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import './index.css';

const Navbar=()=>{
    return(
        <div className="navbar-container">
            <IoReorderThreeOutline className="optionsIcon" />

            <a className="navbarLogo" href="google.com">
                <img src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png" alt="templeNavbarIcon" className="" /> 
                <p>Temples of India</p>
            </a>
            
            <ul className="navbar-menu">
                <li className=""><a href="/">Home</a></li>
                <li ><a href="/search">Search</a></li>
                <li ><a href="/nearby-temples">Nearby Temples</a></li>
                <li ><a href="/add-temples"> <MdAddLocation /> Add Temples</a></li>
                <li ><a href="/about">About us</a></li>
                <li ><a href="/login">Login</a></li>
            </ul>
            <IoMdSearch className="searchIcon" />
        </div>
    )
}

export default Navbar;