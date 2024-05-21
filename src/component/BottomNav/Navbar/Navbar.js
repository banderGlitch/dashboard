import React from "react";
import './Navbar.css';
import { UilSearch } from '@iconscout/react-unicons'
import { AnimateSharedLayout, motion } from 'framer-motion';

export default function NavBar({setExpanded}) {
  return (
    <motion.div className="BottomNav" layoutId='searchCard'>
      <UilSearch onClick = {setExpanded} />
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </motion.div>
  );
}
