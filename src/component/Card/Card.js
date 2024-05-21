import React, { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons"
import Chart from "react-apexcharts";
export default function Card(props) {

    const  [expanded , setExpanded ] = useState(false)
  return (
    <div>
        <AnimateSharedLayout>
            {
                expanded ? (
                   <ExpandedCard params={props}  setExpanded={() => setExpanded(false)}/>
                ) : <CompactCard params ={props} setExpanded={() => setExpanded(true)}/>
            }
        </AnimateSharedLayout>
      
    </div>
  )
}

// Compact card 
// Drop shadow we have to find the stream we have to 
function CompactCard ({params, setExpanded}) {
    const Png = params.png
    return (
        <motion.div className='CompactCard' style={{
            background : params.color.backGround,
            boxshadow : params.color.boxShadow
        }}
         onClick={setExpanded}
         layoutId='expandableCard'
        >
            <div className='radialBar'>
                <CircularProgressbar value={params.barValue} text={`${params.barValue}%`}/>
                <span>{params.title}</span>

            </div>
            <div className='details'>
                <Png/>
                <span>${params.value}</span>
                <span>Last 24 hrs</span>

            </div>

        </motion.div>

    )
}

function ExpandedCard ({params, setExpanded}) {

    const data = {
        options: {
            chart: {
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                type: "area",
                height: "auto",
                dropShadow: {
                    enabled: false,
                    enabledOnSeries: undefined,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.35,
                  },
                dataLabels : {
                    enabled : false
                },
                stroke: {
                    curve: "smooth",
                    colors:["white"]
                }
            }
        }
    }
    return (
        <motion.div className='ExpandedCard'
        style={{background: params.color.backGround,
            boxShadow: params.color.boxShadow
        }}
        layoutId='expandableCard'
        >
            <div style={{alignSelf:'flex-end', cursor:'pointer'}}>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{params.title}</span>
            <div className='chartContainer'>
               <Chart series={params.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>

    )
}

