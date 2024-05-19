import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Card(props) {

    const  [expanded , setExpanded ] = useState(false)
  return (
    <div>
        <AnimateSharedLayout>
            {
                expanded ? (
                   'Expanded'
                ) : <CompactCard params ={props}/>
            }
        </AnimateSharedLayout>
      
    </div>
  )
}

// Compact card 
function CompactCard ({params}) {
    const Png = params.png
    return (
        <div className='CompactCard' style={{
            background : params.color.backGround,
            boxshadow : params.color.boxShadow
        }}>
            <div className='radialBar'>
                <CircularProgressbar value={params.barValue} text={`${params.barValue}%`}/>
            </div>
            <div className='details'>
                <Png/>
                <span>${params.value}</span>
                <span>Last 24 hrs</span>

            </div>

        </div>

    )
}

