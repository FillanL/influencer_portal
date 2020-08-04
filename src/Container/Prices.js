import React from 'react'
import {Link} from 'react-router-dom'

const Prices = () => {
    return (
        <section className="padding-120 pricing-section">
            <h2 className="section-header">
                Pricing Options
            </h2>
            <div className="pricing-col">
                <div className="box">
                    <h2 style={{color:"#cd7f32"}}>
                        Free
                    </h2>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                    </ul>
                    <Link to="/" className="btn primary-background primary-hover ">
                    Select Plan
                    </Link>
                </div>
                <div className="box">
                    <h2 style={{color:"silver"}}>
                        standard
                    </h2>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                        <li>feature 4</li>
                    </ul>
                    <Link to="/" className="btn primary-background primary-hover">
                    Select Plan
                    </Link>
                </div>
                <div className="box">
                    {/* remove inline styles before publishing */}
                    <h2 style={{color:"#FFD700"}}>
                    Premium
                    </h2>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                        <li>feature 4</li>
                        <li>feature 5</li>
                    </ul>
                    <Link to="/" className="btn primary-background primary-hover">
                    Select Plan
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Prices
