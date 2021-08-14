import React from 'react'
import './aboutme.scss'

export default function Aboutme() {
    return (
        <div className='aboutme' id='aboutme'>
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="me">
                    <h1>All About Me!</h1>
                    <p>I'm an aspiring <span>fullstack developer</span> trying to pursue a successful career in the tech industry. I am confident that I possess the array of skills needed to achieve that goal. I am still working very hard to try and master the craft of software development by attempting different projects, aiming to learn something new eachtime. I'm particularly a big fan of <span>React</span> and <span>C#</span>, with all their endless possibilities!</p>
                    <p>Prior to embarking on this journey, I have worked in different industries, specifically in the <span>teaching/education</span> industry as a primary school and ESL teacher, and in the <span>security industry</span> as a SOC Analyst.</p>
                    <p>Currently, I am a Masters of Education student at the University of Exeter, alongside completing a full stack developer course.</p>
                </div>
            </div>
        </div>
    )
}
