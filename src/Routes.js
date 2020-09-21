import React from 'react'
import { Route, Switch } from 'react-router'
// import { useDispatch} from 'react-redux'
// import {getAllRequest} from './Services/requestInfluencerService'

import TopNav from './Container/TopNav'
import Footer from './Container/Footer'
import Home from './Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import './App.scss';
import RequestInfluencer from './Components/RequestInfluencer'
// import MainDashboard from './Components/MainDashboard'
import approveInfluencers from './Components/ApproveInfluencers'
import CurrentUserDash from './Components/CurrentUserDash'
import ErrorPage from './Components/ErrorPage'

const Routes = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getAllRequest())
    // }, [dispatch])

    return (
        <div className="">
            <TopNav/>
            <div className="appContainer">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Signin" component={Signin} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/request-influencer" component={RequestInfluencer} />
                <Route exact path="/dashboard" component={CurrentUserDash} />
                <Route exact path="/influencers-interested" component={approveInfluencers} />
                <Route exact path="*" component={ErrorPage} />
            </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default Routes
