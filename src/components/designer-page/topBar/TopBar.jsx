import React from 'react'
import './TopBar.css'
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';

function TopBar() {

  const introCardData = useSelector(state => state.card.IntroCardHTML);


    const downloadDivAsImage = () => {
        const container = introCardData;
            
        html2canvas(container, { scale: 2 }).then(function(canvas) {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/jpeg', 1.0);
          link.download = 'downloaded_image.jpg';
          link.click();
        });
      };

  return (
    <main className='top-bar'>TopBar
    <button onClick={downloadDivAsImage} style={{color:'black'}}>Download</button>
    </main>
  )
}

export default TopBar