import React from 'react'

const MainDashboard = () => {
    return (
        <div className="main-dashboard">
            <div className="other-accounts">
                <div className="acc-container">
                    <img
                        srcSet="https://images.unsplash.com/photo-1595621859602-83c24ba46d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                        alt="name"
                    />
                    <img
                        srcSet="https://images.unsplash.com/photo-1595787492151-64f1d38266d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                        alt="name"
                    />
                    <img
                        srcSet="https://images.unsplash.com/photo-1595770655731-9a1dc07b4184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&"
                        alt="name"
                    />
                    <img
                        srcSet="https://images.unsplash.com/photo-1595871222310-02a6c323ad2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                        alt="name"
                    />
                </div>
            </div>
            <div className="header-dash">
                <img
                    srcSet="https://images.unsplash.com/photo-1595871222310-02a6c323ad2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                    alt="name"
                />
                <div className="header-info">
                    <div className="account-branding">
                        <h2>@Jhanet Beck</h2>
                        <div className="category">LifeStyle</div>
                        <div className="category">Music</div>
                    </div>
                    <div className="followers">
                       <span className="num">
                           100k
                        </span > 
                        <span className="typeX">
                            post    
                        </span>
                        <span className="num">
                            210k
                        </span> 
                        <span className="typeX">
                            followers    
                        </span>
                        <span className="num">
                            210
                        </span> 
                        <span className="typeX">
                            following    
                        </span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo totam ab corporis itaque vel modi, minus soluta obcaecati est nemo quibusdam iste ullam doloremque quidem repellat beatae tenetur. Aut saepe molestias ullam ab, veritatis nisi praesentium ipsa esse, in.
                    </p>
                </div>
            </div>
            <h3 className="container padding-50">
                Overview XSocial media Stats
            </h3>
            <div className="container stat-box-container">
                {
                    [
                        {id:0, title:"post (last 7 days)", stat:"132"}, 
                        {id:1, title:"followers (last 7 days)", stat:"9k"}, 
                        {id:2, title:"following (last 7 days)",stat:"20"}, 
                        {id:3, title:"total like (last 7 days)",stat:"50k"}, 
                        {id:4, title:"comments (last 7 days)",stat:"10k"}, 
                        {id:5, title:"Engagement (last 7 days)", stat:"45k"}
                    ].map(box =>
                        <div key={box.id} className="stat-box">
                            <div className="container">

                            <div className="analytics-title">{box.title}</div>
                            <p className="stat">
                                {box.stat}
                            </p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default MainDashboard
