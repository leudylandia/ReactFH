import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>

        <div className='notes__content'>
            <input className='notes__title-input' type='text' placeholder='Some awesome title' autoComplete='off'/>
            <textarea className='notes__textarea' placeholder='What happened today?'></textarea>
        </div>

        <div className='notes__image'>
            <img src='https://swall.teahub.io/photos/small/137-1378372_1-mb-image-download.jpg' alt='image'/>
        </div>
    </div>
  )
}
