import React from 'react'
import { useState } from 'react';
import './contact.scss'

export default function Contact() {
    
    const [message, setMessage] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <h1>Contact Me!</h1>
                <p>I'm always open to new opportunities to learn and progress.</p><p> If you'd like to work with me, please don't hesitate to contact me!</p><p> If you'd prefer to call me @ +447737891507, even better!</p>
                <img src="./assets/phonering.png" alt="" />
            </div>
            <div className="right">
                <h2>Let's Talk!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <input type='tel' placeholder='Mobile number' />
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll response as soon as possible!</span>}
                </form>
            </div>                        
        </div>
    )
}
