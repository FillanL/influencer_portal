import React from 'react'
import '../CSS/accountOverview.scss'

function AccountOverview() {
    return (
        <div className="overview-dash">
            <div className="user-info">

            </div>

            <section className="dash-section">
                <div className="section-card no-bg">
                    need help?
                </div>
                <div className="section-card">
                    pending
                </div>
                <div className="section-card">
                    upcoming post
                    <div className=""></div>
                </div>
            </section>

            <section className="dash-section">
                <div className="section-card ">
                    active ad?
                </div>
                <div className="section-card">
                    active ad?
                </div>
            </section>
        </div>
    )
}

export default AccountOverview
