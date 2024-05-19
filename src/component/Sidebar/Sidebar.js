import React, { useState } from 'react'
import './Sidebar.css';
import logo from '../../imgs/logo.png';
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart, UilSignOutAlt } from "@iconscout/react-unicons";

export const SidebarData = [
    { icon: UilEstate, label: 'Dashboard' },
    { icon: UilClipboardAlt, label: 'Orders' },
    { icon: UilPackage, label: 'Products' },
    { icon: UilChart, label: 'Analytics' },
    { icon: UilSignOutAlt, label: 'Sign Out' },
];



function Sidebar() {
    const [selected , setSelected ] = useState(0);
    console.log("SidebarData", SidebarData)
    return (
        <div className='Sidebar'>
            <div className='logo'>
                <img src={logo} alt='no text' />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className='menu'>
            {SidebarData.map((item, index) => (
                    <div className={selected === index ? 'menuItem active' : 'menuItem'} key={index}
                    onClick={() => setSelected(index)}>
                        <div> 
                            <item.icon />
                        </div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar