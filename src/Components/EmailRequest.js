import React,{useState} from 'react'
import {addToEmailList} from '../Services/emailListService'


// do not keep padding 120
const EmailRequest = () => {
    const [email, setEmail] = useState("")
    // console.log(email)
    return (
        <section className="padding-120 emailList">
            <div className="container">
                <h2>
                    Newletter
                </h2>
                <p>
                    Subscribe to our Newletter for 
                </p>
                <p>
                    alerts regarding new features and service promotions
                </p>

                <form 
                    onSubmit={(e)=>{
                        e.preventDefault()
                        addToEmailList(email)
                        setEmail("")
                    }}
                >
                    <input 
                        className="email-input"
                        placeholder="What is your email?" 
                        type="email" 
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        className="sub-btn primary-hover" 
                        type="submit"
                        name="submitBtn"
                        value="Subscribe" 
                    />
                </form>
            </div>
        </section>
    )
}

export default EmailRequest
