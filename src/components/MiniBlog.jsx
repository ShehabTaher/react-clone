import React from 'react'

const MiniBlog = ({ Heading, children }) => {
    return (
        <div className='mini-blog'>
            <div>
                <h2>{Heading}</h2>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default MiniBlog