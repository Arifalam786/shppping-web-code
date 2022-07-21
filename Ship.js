import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from 'react-icons/fa';

export default function Ship(){
    return(
        <div className='ship'>
            <div className='shipa'>
                <p>Shipping and Payment</p>
            </div>
            <div className='tl'>
                <div className='tl-icon1'><FaShoppingCart/></div>
                
                <div className='tl-icon2 truck' ><FaTruck/></div>

            </div>
        </div>
    )
}