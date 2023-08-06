import React from 'react'

const MiniBox = ({ Heading, children }) => {
    return (
        <div>
            <div className='mini-box'>
                <div>
                    <h2>{Heading}</h2>
                    <div className='mini-date'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default MiniBox