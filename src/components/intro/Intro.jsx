import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();
    
    useEffect(() => {

        init(textRef.current, {
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Full Stack Developer. ', 'School Teacher. ', 'Student. ', 'Coder. '],
        });

    }, []);

    return (
        <div className="intro" id='intro'>
            <div className="introMessage">
                <div className="wrapper">
                    <h2>Hi, my name is <span className='jihad'>Jihad</span>.</h2>
                    <h3>I am a ... <span ref={textRef}></span></h3>
                </div>
            </div>
            <div className='arrow'>
                <a href="#aboutme">
                    <img src="assets/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
