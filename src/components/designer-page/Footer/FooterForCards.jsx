import React from 'react';
import './Footer.css'
import * as faIcon from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";

function FooterForCards() {

    const {values} = useSelector(state => ({
        values:state?.card?.IntroCardData,
    }));


  return (
    <div className='footer-for-card'>
        {
            values.profileVisible ? 
            <>
                <div className='area-for-dp'>
                    <img src={values.dpImage} 
                    alt="profile photo" className='profile-photo'/>
                    <div className='area-for-name'>
                        <span>{values.profileName} </span>
                        <span>{values.profileHandler} </span>
                    </div>
                </div>
            </>
        : null}
        <div className='next-btn'>
        {values.swipeText}<faIcon.FaLongArrowAltRight/>
        </div>
    </div>
  )
}

export default FooterForCards