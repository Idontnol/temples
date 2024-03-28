import { IoMdHome } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { PiHandsPrayingThin } from "react-icons/pi";
import { MdAddLocation } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdLogout } from "react-icons/md";

import {useState} from 'react';
import './index.css';

const Sidebar=()=>{
    const [sidebarVisible,setSidebarVisible]=useState(false);


    return(
        <>
        {sidebarVisible && <div className='sidebarContainer'>
        <div onClick={()=>{setSidebarVisible(false)}}><IoMdClose /></div>
            <div className='sidebarTop'>
                <img src="https://templesofindia.org/assets/images/Golden-Temple.jpg/" alt="ganesh" className='' />
                <p className=''> View Profile</p>
            </div>
            <div className='sidebarBottom'>
                <div className=''>
                <IoMdHome className="set-color" />
                    <p>Home</p>
                </div>
                <hr/>
                <div className=''>
                <FaHeart className="set-color"/>
                    <p>Your Favourites</p>
                </div>
                <div className=''>
                <PiHandsPrayingThin className="set-color"/>
                    <p>Nearby Temples</p>
                </div>
                <div className=''>
                <MdAddLocation className="set-color"/>
                    <p>Add Temples</p>
                </div>
                <div className=''>
                <GiByzantinTemple className="set-color"/>
                    <p>Your Contributions</p>
                </div>
                <div className=''>
                <FaGear className="set-color" />
                    <p>Settings</p>
                </div>
                <div className=''>
                    <IoMdHome className="set-color" />
                    <p>About Us</p>
                </div>
                <div className=''>
                <IoStar className="set-color" />
                    <p>Download App</p>
                </div>
                <div className=''>
                    <MdLogout className="set-color" />
                    <p>Logout</p>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Sidebar;