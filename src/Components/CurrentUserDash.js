import React, { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import '../CSS/currentUserDash.scss'
import MainDashboard from './MainDashboard'
import {getAllRequest} from '../Services/requestInfluencerService'
import RequestInfluencer from './RequestInfluencer'
import ApproveInfluencers from './ApproveInfluencers'
import AccountOverview from './AccountOverview'
import ActiveRequest from './ActiveRequest'
// import { Redirect } from 'react-router'

const CurrentUserDash = (props) => {
    
    const dispatch = useDispatch()
    // const token = localStorage.getItem('postedU')
    useEffect(() => {
        dispatch(getAllRequest())
        // dispatch(getRequestByUserId())
    }, [dispatch])
    const [state, setstate] = useState({state: sessionStorage.getItem('dashState') ? sessionStorage.getItem('dashState') : "default"})
    
    // if(!token || token === " ") return props.history.push('/')
    // else
    // console.log(state, state.state)
    return (
        <div className="current-user-dash">
            <ul className="dash-navbar">
                <li onClick={()=>{
                    sessionStorage.setItem('dashState',"overView")
                    setstate({state:"overView"})
                    }}
                >
                    Over View
                </li>
                <li onClick={()=>{
                    sessionStorage.setItem('dashState',"default")
                    setstate({state:"default"})}
                }>
                    Home
                </li>
                <li onClick={()=>{
                    sessionStorage.setItem('dashState',"request")
                    setstate({state:"request"})}
                }>
                    req Infl
                </li>
                <li onClick={()=>{
                    sessionStorage.setItem('dashState',"pendingRequest")
                    setstate({state:"pendingRequest"})
                }}>
                    pending
                </li>
                <li onClick={()=>{
                    sessionStorage.setItem('dashState',"buyerRequest")
                    setstate({state:"buyerRequest"})
                }}>
                    buyer's req
                </li>
            </ul>
            <div className="dash-nav">
                { 
                    state.state === 'default' ? <MainDashboard/>: 
                    state.state === 'request' ? <RequestInfluencer/>: 
                    state.state === 'overView' ? <AccountOverview/>:
                    state.state === 'buyerRequest' ? <ActiveRequest/>:
                    state.state === 'pendingRequest' ? <ApproveInfluencers/>: null
                }
            </div>
            
        </div>
    )
}

export default CurrentUserDash
