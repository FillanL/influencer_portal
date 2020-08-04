import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container bannerh1">
                <h1>
                    One Stop Portal 
                    <br/>
                    For Influences
                </h1>
                <p>
                    all in one tool to provide scheduled content and engage with your audiences
                </p>
                <p>
                    while connecting with brands
                </p>
                <Link to="/" className="btn primary-background primary-hover">
                    Learn more
                </Link> 
                &nbsp; &nbsp;
                <Link to="/" className="btn dark-hover">
                    Download Mobile
                </Link>
            </div>
            <img srcSet="
            https://images.unsplash.com/photo-1549921296-3b0f9a35af35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9
            " alt="exampleOfapp" />
        </section>
    )
}

export default Banner
