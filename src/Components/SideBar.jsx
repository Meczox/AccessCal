import React from 'react'
import '../css/SideBar.css';
import { IoSchool } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBug } from "react-icons/fa";


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'><IoSchool/> <span>AssessCal</span></div>
      <div className='HomeTab'> <HiMiniHome className='Icon' /> <span className='textLeft'>Home</span> </div>
      <div className='ExportTab'><FaComputer className='Icon'/> <span className='textLeft'>Export</span></div>
      <div className='CoffeeTab'><FaCoffee className='Icon'/> <span className='textLeft'>Donation</span></div>
      <div className='BugTab'><FaBug className='Icon'/> <span className='textLeft'>Report Bug</span></div>
      <div className='SettingsTab'><IoIosSettings className='Icon'/> <span className='textLeft'>Settings</span></div>
    </div>
  )
}

export default SideBar