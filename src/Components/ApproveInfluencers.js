import React,{useState} from 'react'
import { useSelector } from 'react-redux'


const ApproveInfluencers = () => {
    const userRequests = useSelector(state => state.activeRequest.requests).filter(req => req.userId === sessionStorage.getItem('u') ? req :null)
    // console.log(userRequests)
    const initialDetailState= {
        close: true
    }
    const [details, setdetails] = useState(initialDetailState)
    // if(userRequests !== undefined)userRequests.map(req => console.log(req)) 
    // console.log(details)

    return (
        <div className="container padding-120 influencers-interested">
            <div className={`request-list`}>
                {
                    userRequests? userRequests.map(request =>
                        <div 
                            key={request._id} 
                            className="request-item"
                            onClick={()=>setdetails({close: details.close ? false: true})}
                            >
                            <label>request Title</label>
                            <p>{request.title}</p>
                        <div 
                            className={`${details.close?"close":""}`} 
                            requestdetails={request}
                        >
                            showing
                        </div>
                        </div>
                    ): null
                }
            </div>
            <div className="request-info">
                <h2>Title of request</h2>
                <p>Date posted: 7/31/20</p>
                <p>Category</p>
                <div>budget: $50</div>
                <p className="request-description">
                    Request Description:
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque neque alias repudiandae. Nisi et recusandae nulla, pariatur necessitatibus quisquam nesciunt quaerat vero tempore fugiat placeat, suscipit at. Voluptatibus, magni.
                </p>
                <div>Ad Copy</div>
            </div>
            <div className="card-container">
                {[0,3,4,43].map(card =>
                <div className="card" key={card}>
                    <img
                        srcSet=""
                        alt="name"
                    />
                    <div className="influencer-info">
                        <div className="header-fee">
                            <h2>@Jimmy_Herro</h2>
                            <span>$25</span>
                        </div>
                        <div>
                            100k instagram 
                            30.3k pinterest
                            5k facebook
                            12k twitter
                        </div>
                        <div>
                            <p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eaque neque alias repudiandae. Nisi et recusandae nulla, pariatur necessitatibus quisquam nesciunt quaerat vero tempore fugiat placeat, suscipit at. Voluptatibus, magni.".substring(0,100)+"..."}</p>
                            <button className="accept-btn">accept</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
        </div>
    )
}

export default ApproveInfluencers
