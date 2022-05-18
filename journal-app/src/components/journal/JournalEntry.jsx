import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{backgroundSize: 'cover', backgroundImage: 'url(https://us.123rf.com/450wm/massonforstock/massonforstock1111/massonforstock111100136/11147955-fille-assise-pr%C3%A8s-d-un-arbre-avec-cam%C3%A9ra-vintage-photo-dans-le-vieux-style-de-couleur-de-l-image-jau.jpg)'}}>

        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>Un nuevo dia</p>
            <p className='journal__entry-content'>Siempre será</p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>18</h4>
        </div>

    </div>
  )
}
