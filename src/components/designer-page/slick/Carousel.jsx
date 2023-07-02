import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import IntroCardEditor from '../InputForCard/IntroCardEditor.jsx';
import CardEditor from '../InputForCard/InputArea.jsx';
import MainCard from './MainCard.jsx';
import SlideCard from './SlideCard.jsx';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

const SimpleSlider = () => {
    const Arrow = ({ className, style, onClick }) => (
      <button
        style={{ ...style, left: 0, backgroundColor: "red",'zIndex':100000000000 }}
        onClick={onClick}
        className='prev-btn'
      >
        <div>back</div>
      </button>
    );
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const {v} = useSelector(state => ({
        v:state?.card?.IntroCards,
    }));

        console.log('v',v)
    
      const sliderRef = React.useRef(null);
      const [currentSlide, setCurrentSlide] = React.useState(0);
      const [transformPosition,setTransformPosition] = useState('')

      const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
      };
    
      const goToNextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const handleSlideChange = (current) => {
        setCurrentSlide(current);
      };

      useEffect(() => {
        if(currentSlide === 0){
            setTransformPosition('614px')
        }
        else if(currentSlide === 1){
            setTransformPosition('114px')
        }
        else if(currentSlide === 2){
            setTransformPosition('-514px')
        }
      }, [currentSlide])
      

  return (
    <>
    <div className="parent-container" style={{transform:`translate3d(${transformPosition}, 0px, 0px)`}}>
      <div className="slick-overlay"></div>
      <Slider
        ref={sliderRef}
        {...settings}
        beforeChange={(_, next) => handleSlideChange(next)}
        className='slick'
        >
        <div>
          <div className={`square-item ${currentSlide === 0 ? 'slick-current' : ''}`}><MainCard/></div>
          { currentSlide === 0 ? <IntroCardEditor/> : null }
        </div>
        <div >
          <div className={`square-item ${currentSlide === 1 ? 'slick-current' : ''}`}><SlideCard number={1}/></div>
          { currentSlide === 1 ? <CardEditor/> : null} 
        </div>
        <div >
          <div className={`square-item ${currentSlide === 2 ? 'slick-current' : ''}`}><SlideCard number={2}/></div>
          { currentSlide === 2 ? <CardEditor/> : null} 
        </div>
      </Slider> 
    </div>
      <button onClick={goToNextSlide} className='next-button' disabled={currentSlide === 2 ? true : false}>next</button>
      <button onClick={goToPrevSlide} className='prev-button' disabled={currentSlide === 0 ? true : false}>prev</button>
    </>

  );
};

export default SimpleSlider;
