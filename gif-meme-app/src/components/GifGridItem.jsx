import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    //const {id, title, url} = img;
    
    //console.log(id, title);
    //console.log(url)
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
