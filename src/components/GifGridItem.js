import React from 'react'

export const GifGridItem = ({title,url}) => {
   console.log(title)
    return (
        <div className='card animate__animated animate__fadeInDown'>
         <img src={url} alt={title}/>
         <p>{title}</p>
        </div>
    )
}
