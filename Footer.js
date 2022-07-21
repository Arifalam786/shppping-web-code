import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
export default function Footer(){
    return(
        <div className='footer'>
            <div className='back'>
                <button className='back-but'><FaArrowLeft/>  back</button>
            </div>
            <div className='fbut'>
                <button className='foot-but-cal' id='foot1'>Continue to shopping</button>
                <button className='foot-but-cal' id='foot2'>Proceed to payment</button>
            </div>
            
        </div>
    )
}