import '../css/SideBar.css';
import { IoSchool } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'><IoSchool/> <span>AssessCal</span></div>
      
      <Link to="/" className='HomeTab' style={{ textDecoration: 'none' }}> 
          <HiMiniHome className='Icon' /> 
          <span className='textLeft'>Home</span> 
      </Link>

      <Link to="/export" className='ExportTab' style={{ textDecoration: 'none' }}>
          <FaComputer className='Icon'/> 
          <span className='textLeft'>Export</span> 
      </Link>

      <Link to="/donation" className='CoffeeTab' style={{ textDecoration: 'none' }}>
          <FaCoffee className='Icon'/> 
          <span className='textLeft'>Donation</span> 
      </Link>

      <Link to="/reportBugs" className='BugTab' style={{ textDecoration: 'none' }}>
          <FaBug className='Icon'/> 
          <span className='textLeft'>Report Bug</span> 
      </Link>

      <Link to="/settings" className='SettingsTab' style={{ textDecoration: 'none' }}>
          <IoIosSettings className='Icon'/> 
          <span className='textLeft'>Settings</span> 
      </Link>
    </div>
  )
}

export default SideBar