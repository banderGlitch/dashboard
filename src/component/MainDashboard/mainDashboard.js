import React from 'react'
import './mainDashboard.css';
import Cards from '../Cards/Cards';
export default function MainDashboard() {
  return (
    <div className='mainDashboard'>
       <h1>Dashboard</h1>
       <Cards/>
       <p>Table</p>
    </div>
  )
}
