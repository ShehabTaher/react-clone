import React from 'react'
import { BsMeta } from 'react-icons/bs'
import { LiaFacebook, LiaTwitter, LiaGit } from 'react-icons/lia'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='copyright'>
                <p> <BsMeta />Meta Open Source</p>
                <p>2023</p>
            </div>
            <div className='links'>
                <div className='link-list'>
                    <h4>
                        <a href='#'>Learn React</a>
                    </h4>
                    <a href='#'>Quick Start</a>
                    <a href='#'>Installation</a>
                    <a href='#'>Describing the UI</a>
                    <a href='#'>Adding Interactivity</a>
                    <a href='#'>Managing State</a>
                    <a href='#'>Escape Hatches</a>
                </div>
                <div className='link-list'>
                    <h4>
                        <a href='#'>Community</a>
                    </h4>
                    <a href='#'>Code of Conduct</a>
                    <a href='#'>Meet the Team</a>
                    <a href='#'>Docs Contributors</a>
                    <a href='#'>Acknowledgements</a>
                </div>


                <div className='link-list'>
                    <h4>
                        <a href='#'>API Reference</a>
                    </h4>
                    <a href='#'>React APIs</a>
                    <a href='#'>React DOM APIs</a>

                </div>
                <div className='link-list'>
                    <h4>
                        <a href='#'>More</a>
                    </h4>
                    <a href='#'>Blog</a>
                    <a href='#'>React Native</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Terms</a>
                    <div className='social'>
                        <a href='#'><LiaFacebook style={{ width: '25px', height: '25px' }} /></a>
                        <a href='#'><LiaTwitter style={{ width: '25px', height: '25px' }} /></a>
                        <a href='#'><LiaGit style={{ width: '25px', height: '25px' }} /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer