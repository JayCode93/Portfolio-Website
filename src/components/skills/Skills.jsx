import React from 'react'
import { mySkills } from '../../skillsData';
import { useState } from 'react';
import './skills.scss'
export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(11);
    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 10) : setCurrentSlide(currentSlide < mySkills.length -1 ? currentSlide +3 : 0);
    }

    return (
        <div className='skills' id='skills'>
            <h1>Programming languages I learnt during the coding traineeship I completed.</h1>
           <div className="slider" style={{transform: `translateX(-${currentSlide * 160}px)`}}>
               {mySkills.map(d => (<div className="container">
                   <img src={d.img} />
               </div>))}
           </div>
           <img src="./assets/arrowww.png" className='arrow left' onClick={() => handleClick('left')} />
           <img src="./assets/arrowww.png" className='arrow right' onClick={() => handleClick('right')} />
        </div>
    )
}
