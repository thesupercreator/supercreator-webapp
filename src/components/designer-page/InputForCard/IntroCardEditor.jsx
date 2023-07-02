import React, { useEffect } from 'react'
import ToggleButton from '../ToggleSwitch/ToggleSwitch.jsx'
import './AreaForInput.css'
import EmojiPicker from 'emoji-picker-react';
import { useDispatch,useSelector } from "react-redux";

function IntroCardEditor() {

    const dispatch = useDispatch()

    const {values} = useSelector(state => ({
        values:state?.card?.IntroCardData,
    }));

    const handleToggleTitle = (event) => {
        let changeValue = values
        changeValue['titleVisible'] = !event
        dispatch({type:'IntroCards',payload:changeValue})
    }
    const handleTextChangeTitle = (event) => {
        let changeValue = values
        changeValue['title'] = event.target.value
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleToggleSubTitle = (event) => {
        let changeValue = values
        changeValue['subTitleVisible'] = !event
        dispatch({type:'IntroCards',payload:changeValue})
    }
    const handleTextChangeSubTitle = (event) => {
        let changeValue = values
        changeValue['subTitle'] = event.target.value
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleToggleEmoji = (event) => {
        let changeValue = values
        changeValue['emojiVisible'] = !event
        dispatch({type:'IntroCards',payload:changeValue})
    }
    const handleTextChangeEmoji = (event) => {
        console.log(event)
        let changeValue = values
        changeValue['emoji'] = event.emoji        
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleToggleSwipe = (event) => {
        let changeValue = values
        changeValue['swipeVisible'] = !event
        dispatch({type:'IntroCards',payload:changeValue})
    }
    const handleTextChangeSwipe = (event) => {
        console.log(event)
        let changeValue = values
        changeValue['swipeText'] = event.target.value        
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleToggleProfile = (event) => {
        let changeValue = values
        changeValue['profileVisible'] = !event
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleTextChangeProfileName = (event) => {
        console.log(event)
        let changeValue = values
        changeValue['profileName'] = event.target.value        
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleTextChangeProfileTag = (event) => {
        console.log(event)
        let changeValue = values
        changeValue['profileHandler'] = event.target.value        
        dispatch({type:'IntroCards',payload:changeValue})
    }

    const handleTextChangeProfileImage = (event) => {
        console.log(event)
        let changeValue = values
        changeValue['dpImage'] = event.target.value        
        dispatch({type:'IntroCards',payload:changeValue})
    }

    console.log('values.emojiVisible',values.emojiVisible)

    useEffect(() => {
        console.log('here')
        let defaultValues = {
            'titleVisible':true,
            'title':'You would read this first',
            'subTitleVisible':true,
            'subTitle':'You would read this first',
            'emojiVisible':true,
            'emoji':'😄',
            'descVisible':true,
            'desc':'Then you would read here',
            'swipeVisible':true,
            'swipeText':'',
            'profileVisible':true,
            'profileName':'',
            'dpImage':"data:image/jpeg;base64,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",
            'profileHandler':'',
        }
        dispatch({type:'IntroCards',payload:defaultValues})
    }, [])


  return (
    <main className='intro-card-edit'>
        <h2>Intro Slide Settings</h2>
        <div className='title-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggleTitle} checked={values.titleVisible}/>
                <h5>Title</h5>
            </div>
            <input type="text" onChange={handleTextChangeTitle} value={values.title}/>
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggleSubTitle} checked={values.subTitleVisible}/>
                <h5>Subtitle</h5>
            </div>
            <input type="text" onChange={handleTextChangeSubTitle} value={values.subTitle}/>
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggleEmoji} checked={values.emojiVisible}/>
                <h5>Emoji</h5>
            </div>
            <EmojiPicker width='100%' onEmojiClick={handleTextChangeEmoji} lazyLoadEmojis={true}/>
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggleSwipe} checked={values.swipeVisible}/>
                <h5>Swipe indicator</h5>
            </div>
            <input type="text" onChange={handleTextChangeSwipe} value={values.swipeText}/>
        </div>
        <div className='subtitle-area'>
            <div className='toggle-area'>
                <ToggleButton onChange={handleToggleProfile} checked={values.profileVisible}/>
                <h5>Profile info</h5>
            </div>
            <h5>Profile name</h5>
            <input type="text" onChange={handleTextChangeProfileName} value={values.profileName}/>
            <h5>Profile handle</h5>
            <input type="text" onChange={handleTextChangeProfileTag} value={values.profileHandler}/>
            <h5>Display picture</h5>
            <input type="text" onChange={handleTextChangeProfileImage}/>
        </div>
    </main>
  )
}

export default IntroCardEditor