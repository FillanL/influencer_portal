import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {loginUser, isUserAuth} from '../Services/userLoginService'

const Signin = (props) => {
    const initialState = {userName:"", password:""}
    const [login, setLogin] = useState(initialState)
    //  isUserAuth()

    useEffect(() => {
        console.log("test")
        const checkAuth = async()=>{
            console.log("test3243")

            const auth = await isUserAuth()
            console.log( auth, "lmnjknkn")
            if( auth) return props.history.push('/Dashboard')
        }
        checkAuth()
    }, [props.history])

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

            <form onSubmit={async(e)=>{
                e.preventDefault()
                const logSuccess = await loginUser(login)
                setLogin(initialState)
                if(logSuccess) return props.history.push('/Dashboard')
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