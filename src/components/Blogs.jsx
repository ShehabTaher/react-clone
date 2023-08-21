import React, { useEffect, useState } from 'react'
import MiniBlog from './MiniBlog';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../redux/action';
import blogSlice, { getBlogs, getData } from '../redux/blogSlice';
const Blogs = () => {

    // const [blog, setBlog] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then(data => setBlog(data));
    // }, []);

    const dispatch = useDispatch();
    const { Blogs } = useSelector((state) => state.blog);

    // console.log(Blogs);
    useEffect(() => {
        // dispatch(fetchData());
        dispatch(getBlogs.fulfilled());
    }, [dispatch]);



    return (
        // <div className='blogs'>
        //     <div className='blogs-width'>
        //         <a href='/blogs'>Blogs</a>
        //         <h1>React Blog</h1>
        //         <p>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the <a href='https://twitter.com/reactjs'>@reactjs</a>  account on Twitter, but you wont miss anything essential if you only read this blog.</p>
        //         {blogs.map((item) => (
        //             <MiniBlog key={item.id} Heading={item.title}>{item.body}</MiniBlog>
        //         ))}

        //     </div>
        // </div>

        <div>
            {Blogs?.map((item) => (
                <h1>{item.title}</h1>
            ))}
        </div>


    );
};


export default Blogs