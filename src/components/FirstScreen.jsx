import React from 'react'
import MainIcon from '../Asset/logo512.png'
import { Button } from 'react-bootstrap'
const FirstScreen = ({ Heading, Paragraph, children }) => {
    return (
        <React.Fragment>
            <div className='main-screen container-fluid'>
                <img src={MainIcon} alt='Logo' width='200px' height='200px' className='mt-md-6' />
                <div>
                    <h1>{Heading}</h1>
                    <p>{Paragraph}</p>
                </div>
                {children}
            </div>

        </React.Fragment>
    )
}

export default FirstScreen