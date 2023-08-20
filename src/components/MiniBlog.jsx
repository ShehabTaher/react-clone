import React from 'react'

const MiniBlog = ({ Heading, children }) => {
    return (
        <div className='mini-blog'>
            <div>
                <h2>{Heading}</h2>
                <div className='mini-date'>15 August 2023</div>
                <div>{children}</div>
                <a href='#'>Read More</a>
            </div>
        </div>
    )
}

export default MiniBlog