import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <section className='padding-120 signin transparent'>
            <div className="container stacked">
                {/* here */}
                <Link className="btn box-shadow primary-background primary-hover" to="http://www.facebook.com">
                    sigin with facebook
                </Link>
                <Link className="btn box-shadow primary-background primary-hover "to="www.Pinterest.com">
                    sigin with Pinterest
                </Link>
                <Link className="btn box-shadow primary-background primary-hover" to="www.Instagram.com">
                    sigin with Instagram
                </Link>
            </div>
        </section>
    )
}

export default Signin
