import React, { useRef, useEffect } from 'react';
import './Searchbar.css';
import { AnimateSharedLayout, motion } from 'framer-motion';

export default function Searchbar({setExpanded}) {
 const searchbarRef = useRef(null);

 const handleClickOutside = (event) => {
    if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
      setExpanded();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div ref={searchbarRef}  onClick={setExpanded} className='Searchbar'  layoutId='searchCard'>Searchbar</motion.div>
  )
}
