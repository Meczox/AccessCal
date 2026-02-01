import React from 'react'
import { IoConstructOutline } from "react-icons/io5"; 
import '../css/ComingSoon.css'; 

const ComingSoon = ({ title, message }) => {
  return (
    <div className='coming-soon-container'>
      <div className='content-box'>
        <IoConstructOutline className='icon-spin' size={80} color="#2563eb" />
        <h1>{title}</h1>
        <p>{message}</p>
        <a href="/" className='back-button'>Return Home</a>
      </div>
    </div>
  )
}

export default ComingSoon