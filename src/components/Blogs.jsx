import React, { useEffect, useState } from 'react'

import MiniBlog from './MiniBlog';

const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(data => setBlog(data));
    }, []);


    return (
        <div className='blogs'>
            {blog.map((item) => (
                <MiniBlog key={item.id} Heading={item.title}>{item.body}</MiniBlog>
            ))}
        </div>
    );
};


export default Blogs