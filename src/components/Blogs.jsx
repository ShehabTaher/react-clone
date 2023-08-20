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
            <div className='blogs-width'>

                <a href='/blogs'>Blogs</a>
                <h1>React Blog</h1>
                <p>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the <a href='https://twitter.com/reactjs'>@reactjs</a>  account on Twitter, but you won’t miss anything essential if you only read this blog.</p>
                {blog.map((item) => (
                    <MiniBlog key={item.id} Heading={item.title}>{item.body}</MiniBlog>
                ))}
            </div>
        </div>
    );
};


export default Blogs