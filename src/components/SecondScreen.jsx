import React from 'react'

const SecondScreen = ({ Heading, children, color }) => {

    return (
        <div className='secondScreen' style={{
            backgroundColor: `${color}`
        }}>
            <h1>
                {Heading}
            </h1>
            {children}
        </div>

    )
}

export default SecondScreen