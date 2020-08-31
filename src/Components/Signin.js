import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {newUser} from '../Services/userLoginService'

const Signin = () => {
    const initialState = {userName:"", password:""}
    const [login, setLogin] = useState(initialState)
    console.log(login)
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
            <form onSubmit={(e)=>{
                e.preventDefault()
                newUser(login)
                setLogin(initialState)
                }}>
                <label>userName</label>
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
                <label>PassWord</label>
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
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Signin