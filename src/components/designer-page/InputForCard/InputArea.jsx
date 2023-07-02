import React from 'react'
import ToggleButton from '../ToggleSwitch/ToggleSwitch.jsx'
import './AreaForInput.css'

function CardEditor() {

    const handleToggle = (event) => {
        console(event)
    }

  return (
    <main className='intro-card-edit'>
        <h2>Slide Settings</h2>
        <div className='title-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggle}/>
                <h5>Title</h5>
            </div>
            <input type="text" />
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggle}/>
                <h5>Subtitle</h5>
            </div>
            <input type="text" />
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggle}/>
                <h5>Swipe indicator</h5>
            </div>
            <input type="text" />
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggle}/>
                <h5>Profile info</h5>
            </div>
            <h5>Profile name</h5>
            <input type="text"/>
            <h5>Profile handle</h5>
            <input type="text" />
            <h5>Display picture</h5>
            <input type="text" />
        </div>
    </main>
  )
}

export default CardEditor