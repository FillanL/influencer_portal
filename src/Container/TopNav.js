import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LogoM from '../Images/final-01.png'
// import '../CSS/mainNav.scss'

const TopNav = () => {
    const navToggle = () => {
        let nav = document.querySelector('.nav-links');
        nav.style.display === "" || nav.style.display === "block" ? nav.style.display = "none" : nav.style.display === "none" ? nav.style.display = "block" : nav.style.display = "";
    }
    const loggged = true
        return (
            <nav className="top-nav">
                <div id="Logo">
                    <div>
                        <Link to='/'>
                            <span style={{ "color": "rgba(226,180,121)" }}>
                                Dope
                            </span>
                            <span style={{ "color": "rgba(206,102,215,.8)" }}>
                                Name
                            </span>
                            {/* {/* <LogoM />
                            <img style={{"height":"48px","alignContent": "left","objectFit": "cover" ,"width":"210px"}} src={LogoM} alt="asd" /> */}
                        </Link>
                    </div>
                    <div>
                        {/* need to add fontAwsome */}
                         {/* <FontAwesomeIcon
                            className="mobile-burger"
                            style={{
                                // "width":"50px",
                                "backgroundColor": "rgba(300,302,300,.0)"
                            }}
                            onClick={() => navToggle()}
                            icon={['fa', 'bars']} size="2x"
                        />  */}
                    </div>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/features'>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to='/Pricing'>
                            Pricing Plans
                        </Link>
                    </li>
                    {loggged ? 
                    <li>
                        <Link to='/DashBoard'>
                            DashBoard
                        </Link>
                    </li>:
                    <li>
                        <Link to='/Signin'>
                            Sign up
                        </Link>
                    </li>}
                    <li>
                        <Link to='/Signin'>
                            Temp
                        </Link>
                    </li>
                </ul>
            </nav>
        )   
}

export default TopNav

