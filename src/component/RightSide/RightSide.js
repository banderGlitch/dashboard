import React from 'react'
import './RightSide.css';
import Updates from '../Updates/Updates';

function RightSide() {
  return (
    <div className='RightSide'>
        <div>
            <h3>
               <Updates/>
            </h3>
        </div>
        <div>
            <h3>Customer Review</h3>
        </div>
    </div>
  )
}

export default RightSide