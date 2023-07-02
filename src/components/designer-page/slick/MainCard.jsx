import React, { useEffect, useRef } from 'react';
import './Carousel.css'
import FooterForCards from '../Footer/FooterForCards.jsx'
import { useDispatch,useSelector } from "react-redux";

function MainCard() {

    const divRef = useRef(null);

    const dispatch = useDispatch()

    const {values} = useSelector(state => ({
        values:state?.card?.IntroCardData,
    }));



    useEffect(() => {
        dispatch({type:'IntroCardHTML',payload:divRef.current})
    }, [values])
    

  return (
    <main className='card-render' ref={divRef}>
        {values ? 
        <>
            <div className='subtitle'>
                {values.subTitleVisible ? <h3 className='subtitle-text'>{values.subTitle}</h3> : null}
            </div>
            <div className='title'>
                {values.titleVisible ? <h1>{values.title}</h1> : null}
            </div>
            <div className='desc'>
                {values.descVisible ? <h4>{values.desc}</h4> : null }
            </div>
            {values.emojiVisible ? <div className='emoji-area'>{values.emoji}</div> : null }
            <FooterForCards/>
        </>
            
        :null}
    </main>
  )
}

export default MainCard