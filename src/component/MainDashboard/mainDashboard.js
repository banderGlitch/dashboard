import React from 'react'
import './mainDashboard.css';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
export default function MainDashboard() {
  return (
    <div className='mainDashboard'>
       <h1>Dashboard</h1>
       <Cards/>
       <Table/>
       {/* <h2>Recent Orders</h2>
       <Table/> */}
    </div>
  )
}
