import React from 'react'
import { Link } from 'react-router-dom';

const MiniBlog = ({ Id, Heading, children }) => {
    const handlecliceked = (value) => {
        return console.log(value);
    }
    // const id = {Id}
    return (
        <div className='mini-blog'>
            <div>
                <h2>{Heading}</h2>
                <div className='mini-date'>15 August 2023</div>
                <div>{children}</div>
                <Link to={`/blogs/${Id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default MiniBlog