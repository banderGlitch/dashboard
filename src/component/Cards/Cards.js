import React from 'react'
import './Cards.css';
import Card from '../Card/Card';
import { CardsData } from '../../Data/Data';

function Cards() {
  return (
    <div className='Cards'>
        {CardsData.map((card, id) => {
            return (
                <div className='parentContainer'>
                    <Card
                      title={card.title}
                      color={card.color}
                      barValue={card.barValue}
                      png = {card.png}
                      value= {card.value}
                      series = {card.series}
                    />
                </div>
            )
        })}

    </div>
  )
}

export default Cards