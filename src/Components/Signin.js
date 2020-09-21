import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {loginUser} from '../Services/userLoginService'

const Signin = () => {
    const initialState = {userName:"", password:""}
    const [login, setLogin] = useState(initialState)
    // console.log(login)
    return (
        <section className='padding-120 signin transparent'>
            <div className="container stacked">
                {/* here */}
                <Link className="social-btn box-shadow primary-background primary-hover" to="http://www.facebook.com">
                    sigin with facebook
                </Link>
                <Link className="social-btn box-shadow primary-background primary-hover "to="www.Pinterest.com">
                    sigin with Pinterest
                </Link>
                <Link className="social-btn box-shadow primary-background primary-hover" to="www.Instagram.com">
                    sigin with Instagram
                </Link>
            {/* </div> */}
            <form onSubmit={(e)=>{
                e.preventDefault()
                loginUser(login)
                setLogin(initialState)
                }}>
                <div className="form_format">
                    <label>userName</label><br/>
                    <input
                        name="userName"
                        type="text" 
                        placeholder="username"
                        value={login.userName}
                        onChange={(e)=>setLogin({
                            ...login,
                            [e.target.name]:e.target.value
                        })}
                        // pattern=""
                    />
                </div>
                <div className="form_format">
                    
                    <label>PassWord</label><br></br>
                    <input 
                        name="password"
                        type="password"
                        placeholder="password"
                        value={login.password}
                        onChange={(e)=>setLogin({
                            ...login,
                            [e.target.name]:e.target.value
                        })}
                        // pattern=""
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
            </div>
            <div>
                don't have an account? <Link to="/signup">signup</Link>
            </div>
        </section>
    )
}

export default Signin