import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchUserDataById, fetchBlogDataById } from '../redux/actions';
import MiniBlog from './MiniBlog';

const SingleBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id);
    const userData = useSelector((state) => state.userId);
    const blogData = useSelector((state) => state.blogId);
    const nextBlogId = useSelector((state) => state.nextBlogId); // Access the next page ID from Redux state

    // Calculate the ID for the next page
    const nextId = nextBlogId || parseInt(id) + 1;
    console.log(blogData);
    console.log(userData);
    useEffect(() => {
        dispatch(fetchUserDataById(id));
        dispatch(fetchBlogDataById(id));
    }, [dispatch, id]);
    return (
        <div>
            {blogData.loading ? (
                <p>Loading...</p>
            ) : blogData.error ? (
                <p>Error: {blogData.error}</p>
            ) : (
                <div className='single-blog'>
                    <div className='single-blog-width'>
                        <a href='/blogs'>Blogs</a>
                        <div className='mini-single-blog'>
                            <div>
                                <h1>{blogData.data?.title}</h1>
                                <p className='mini-date'>15 August 2023 By
                                    <a href='#'>{userData.data?.name}</a>
                                </p>
                                <div className='ruler'></div>
                                <p>{blogData.data?.body}</p>
                            </div>
                            <div className='ruler'></div>
                        </div>
                    </div>
                    <div className='blog-block-paragraph'>
                        <h2>tl;dr</h2>
                        <ul>
                            <li>We’re introducing an officially supported<a href='#'> Canary release channel</a> for React. Since it’s officially supported, if any regressions land, we’ll treat them with a similar urgency to bugs in stable releases.</li>
                            <li>Canaries let you start using individual new React features before they land in the semver-stable releases.</li>
                            <li>Unlike the <a href='#'>Experimental </a> channel, React Canaries only include features that we reasonably believe to be ready for adoption. We encourage frameworks to consider bundling pinned Canary React releases.</li>
                            <li>We will announce breaking changes and new features on our blog as they land in Canary releases.</li>
                            <li>As always, React continues to follow semver for every Stable release.</li>
                        </ul>
                    </div>
                    <div className='blog-block-paragraph'>
                        <p>  Typically, every React feature has gone through the same stages:</p>
                        <ol>
                            <li>We develop an initial version and prefix it with <span>experimental_</span> or <span>unstable_</span>. The feature is only available in the experimental release channel. At this point, the feature is expected to change significantly.</li>
                            <li>We find a team at Meta willing to help us test this feature and provide feedback on it. This leads to a round of changes. As the feature becomes more stable, we work with more teams at Meta to try it out.</li>
                            <li>Eventually, we feel confident in the design. We remove the prefix from the API name, and make the feature available on the main branch by default, which most Meta products use. At this point, any team at Meta can use this feature.</li>
                            <li>As we build confidence in the direction, we also post an RFC for the new feature. At this point we know the design works for a broad set of cases, but we might make some last minute adjustments.</li>
                            <li>When we are close to cutting an open source release, we write documentation for the feature and finally release the feature in a stable React release.</li>
                        </ol>
                        <p>This playbook works well for most features we’ve released so far. However, there can be a significant gap between when the feature is generally ready to use (step 3) and when it is released in open source (step 5).</p>
                        <p>We’d like to offer the React community an option to follow the same approach as Meta, and adopt individual new features earlier (as they become available) without having to wait for the next release cycle of React.</p>
                        <p>As always, all React features will eventually make it into a Stable release.</p>
                    </div>
                    <div className='blog-block-paragraph'>
                        <h2>Can we just do more minor releases? </h2>
                        <p>Generally, we do use minor releases for introducing new features.</p>
                        <p>However, this isn’t always possible. Sometimes, new features are interconnected with other new features which have not yet been fully completed and that we’re still actively iterating on. We can’t release them separately because their implementations are related. We can’t version them separately because they affect the same packages (for example, <span>react</span> and <span>react-dom</span>). And we need to keep the ability to iterate on the pieces that aren’t ready without a flurry of major version releases, which semver would require us to do.</p>
                        <p>At Meta, we’ve solved this problem by building React from the main branch, and manually updating it to a specific pinned commit every week. This is also the approach that React Native releases have been following for the last several years. Every stable release of React Native is pinned to a specific commit from the main branch of the React repository. This lets React Native include important bugfixes and incrementally adopt new React features at the framework level without getting coupled to the global React release schedule.</p>
                        <p>We would like to make this workflow available to other frameworks and curated setups. For example, it lets a framework on top of React include a React-related breaking change before this breaking change gets included into a stable React release. This is particularly useful because some breaking changes only affect framework integrations. This lets a framework release such a change in its own minor version without breaking semver.</p>
                        <p>Rolling releases with the Canaries channel will allow us to have a tighter feedback loop and ensure that new features get comprehensive testing in the community. This workflow is closer to how TC39, the JavaScript standards committee, <a href='#'>handles changes in numbered stages</a>. New React features may be available in frameworks built on React before they are in a React stable release, just as new JavaScript features ship in browsers before they are officially ratified as part of the specification.</p>
                    </div>
                    <div className='blog-block-paragraph'>
                        <h3>Why not use experimental releases instead?</h3>
                        <p>Although you can technically use Experimental releases, we recommend against using them in production because experimental APIs can undergo significant breaking changes on their way to stabilization (or can even be removed entirely). While Canaries can also contain mistakes (as with any release), going forward we plan to announce any significant breaking changes in Canaries on our blog. Canaries are the closest to the code Meta runs internally, so you can generally expect them to be relatively stable. However, you do need to keep the version pinned and manually scan the GitHub commit log when updating between the pinned commits.</p>
                        <p>We expect that most people using React outside a curated setup (like a framework) will want to continue using the Stable releases. However, if you’re building a framework, you might want to consider bundling a Canary version of React pinned to a particular commit, and update it at your own pace. The benefit of that is that it lets you ship individual completed React features and bugfixes earlier for your users and at your own release schedule, similar to how React Native has been doing it for the last few years. The downside is that you would take on additional responsibility to review which React commits are being pulled in and communicate to your users which React changes are included with your releases.</p>
                        <p>If you’re a framework author and want to try this approach, please get in touch with us.</p>
                    </div>
                    <div className='Blog-Note'>
                        <h2>Note</h2>
                        <p>Strictly speaking, Canary is not a new release channel—it used to be called Next. However, we’ve decided to rename it to avoid confusion with Next.js. We’re announcing it as a new release channel to communicate the new expectations, such as Canaries being an officially supported way to use React.</p>
                    </div>
                    <div className='blog-block-paragraph'>
                        <h2>Stable releases work like before</h2>
                        <p>We are not introducing any changes to stable React releases.</p>
                    </div>
                    <div className='blogs-link'>
                        <a href='/blogs' className='blog-link'>Blogs</a>
                        <Link to={`/blogs/${nextId}`} className='blog-link'>Next Blog</Link>
                    </div>
                    <div className='ruler'></div>
                    <div className='blog-survey'>
                        <h4>How do you like these docs?</h4>
                        <button>Take Our Survey!<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SingleBlog