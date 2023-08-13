import React from 'react'
import SecondScreen from './SecondScreen'
import FirstScreen from './FirstScreen'
import { GrArticle } from "react-icons/gr"
import { AiOutlineExperiment, AiOutlineDown } from 'react-icons/ai'
import MiniBox from './MiniBox'
import FirstImage from '../Asset/1.jpeg'
import SecondImage from '../Asset/2.jpeg'
import ThirdImage from '../Asset/3.jpeg'
import FourthImage from '../Asset/4.jpeg'
import FifthImage from '../Asset/5.jpeg'
import SixthImage from '../Asset/6.jpeg'
import Slider from './Slider'

const Hero = () => {
    return (
        <div>
            <FirstScreen Heading={"React"} Paragraph={"The library for web and native user interfaces"}>
                <button>Learn React</button>
                <button className='second-btn'
                >API Reference</button>
            </FirstScreen>

            <SecondScreen Heading={'Create user interfaces from components'} color={'#232730'}>
                <p>
                    React lets you build user interfaces out of individual pieces called components. Create your own React components like <span>Thumbnail</span>, <span>LikeButton</span>LikeButton, and <span>Video</span>. Then combine them into entire screens, pages, and apps.
                </p>
                <img src={FirstImage} alt='section1' className='img-section' />
                <p>
                    Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
                </p>
            </SecondScreen>
            <SecondScreen Heading={'Write components with code and markup'} color={'#22252E'}>
                <p>
                    React components are JavaScript functions. Want to show some content conditionally? Use an <span>if</span>  statement. Displaying a list? Try array <span>map()</span> . Learning React is learning programming.
                </p>
                <img src={SecondImage} alt='section2' className='img-section' />
                <p>
                    This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.
                </p>
            </SecondScreen>
            <SecondScreen Heading={'Add interactivity wherever you need it'} color={'#232730'}>
                <p>
                    React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
                </p>
                <img src={ThirdImage} alt='section3' className='img-section' />
                <p>
                    You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.
                </p>
                <div className='second-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} ><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                    Add React to your page
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                </div>
            </SecondScreen>
            <SecondScreen Heading={'Go full-stack with a framework'} color={'#22252E'}>
                <p>
                    React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like <a href='https://nextjs.org/'>Next.js</a>  or <a href='https://remix.run/'>Remix</a> .
                </p>
                <img src={FourthImage} alt='section4' className='img-section' />
                <p>
                    React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.
                </p>
                <div className='second-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} ><path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z" /></svg>
                    Get started with a framework
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                </div>
            </SecondScreen>
            <SecondScreen Heading={'Use the best from every platform'} color={'#1B1E25'}>
                <p>
                    People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.
                </p>
                <img src={FifthImage} alt='section5' className='img-section' />
                <p>
                    With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.
                </p>
                <div className='second-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} ><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                    Build for native platforms

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                </div>
            </SecondScreen>



            <div className="separate-boxes">
                <SecondScreen Heading={'Upgrade when the future is ready'} color={'#1E2229'} >
                    <p>
                        React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
                    </p>
                    <p>
                        The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
                    </p>
                    <div className='second-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} ><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                        Read more React Now

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                    </div>
                </SecondScreen>
                <div className='all-boxes'>
                    <div className='boxes-head'> <AiOutlineDown /> Latest React News</div>
                    <div className='mini-boxes'>
                        <MiniBox Heading={"React Canaries: Incremental Feature Rollout"} >
                            <GrArticle /> May 3,2023
                        </MiniBox>
                        <MiniBox Heading={"React Labs: March 2023"} >
                            <AiOutlineExperiment /> March 22,2023
                        </MiniBox>
                        <MiniBox Heading={"Introducing react.dev"} >
                            <GrArticle /> March 16,2023
                        </MiniBox>
                        <MiniBox Heading={"React Labs: june 2022"} >
                            <AiOutlineExperiment /> June 15,2022
                        </MiniBox>
                    </div>
                </div>

            </div>







            <SecondScreen Heading={'Join a community of millions'} color={'#191C22'}>
                <p>
                    You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.
                </p>
                <Slider />
                <p>
                    This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.
                </p>
                <div className='second-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                    Build for native platforms
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                </div>
            </SecondScreen>


            <FirstScreen Heading={"Welcome to the React community"} >
                <button>Get Started</button>
            </FirstScreen>
        </div >
    )
}

export default Hero