import React from 'react'
import { Link } from 'react-router-dom'
import app01 from '../assets/images/app/01.jpg'
import app02 from '../assets/images/app/02.jpg'

const btnText ="sign up for free";
const title ="Show AnyTime &  Anywhere";
const decs ="take shop on your any device with our app & learn all time what you want."


const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
         <div className='section-header text-center'>
              <Link to="/signup" className='lab-btn'>{btnText}</Link>
              <h2 className='title'>{title}</h2>
              <p>{decs}</p>
         </div>
         <div className='section-wrapper'>
            <ul className='lab-ul'>
                <li><a href="#"><img src={app01} alt="" /></a></li>
                <li><a href="#"><img src={app02} alt="" /></a></li>
            </ul>
         </div>
        </div>
    </div>
  )
}

export default AppSection