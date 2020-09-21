import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {newUser} from '../Services/userLoginService'

const Signup = () => {
    const initialState = {userName:"", password:"",email:""}
    const [passwordCheck, setPasswordCheck] = useState({password:""})
    const [formError, setFormError] = useState({passwordError:false})
    const [login, setLogin] = useState(initialState)
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
                if(passwordCheck.password === login.password){

                    newUser(login)
                    setLogin(initialState)
                    setFormError({...formError, passwordError: false })

                    
                }else{
                    setFormError({...formError, passwordError: true })
                    console.log("wrong re-pass")
                }
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
                    
                    <label>Email</label><br></br>
                    <input 
                        name="email"
                        type="email"
                        placeholder="email"
                        value={login.email}
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
                        className={formError.passwordError ? "error" : ""}
                        name="password"
                        type="password"
                        placeholder="password"
                        value={login.password}
                        onChange={(e)=>setLogin({
                            ...login,
                            [e.target.name]:e.target.value
                        })}
                        // pattern=""
                    /><br/>
                    <label>Re-password</label><br></br>
                    <input 
                        className={formError.passwordError ? "error" : ""}
                        name="password"
                        type="password"
                        placeholder="reEnter password"
                        value={passwordCheck.password}
                        onChange={(e)=>setPasswordCheck({
                            ...passwordCheck,
                            [e.target.name]:e.target.value
                        })}
                        // pattern=""
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
            </div>
            <div>
                already an account? <Link to="/signin">sign in</Link>
            </div>
        </section>
    )
}

export default Signup