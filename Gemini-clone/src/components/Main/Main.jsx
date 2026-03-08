import React from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Ketan.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>suggest beautiful places to see on an upcomming road</p>
                <img src={assets.compass_icon} alt="" />
            </div>
             <div className="card">
                <p>briefly sumarize this concept: urban planning </p>
                <img src={assets.bulb_icon} alt="" />
            </div>
             <div className="card">
                <p>Brainstrom team boanding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
             <div className="card">
                <p>improve the readability of following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
 