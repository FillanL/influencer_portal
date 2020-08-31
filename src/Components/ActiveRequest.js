import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {applyToRequest} from '../Services/applyToRequestService'
import '../CSS/activeRequest.scss'

function ActiveRequest() {
    const dummy = [
        { id: 1, user: 1, title: "looking for Dog influencer", description: "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.", budget: "25", platform: ['insta', 'twitter'] },
        { id: 2, user: 2, title: "lVideo ad for clothing brand", description: "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.", budget: "25", platform: ['twitch', 'youtube'] },
        { id: 3, user: 3, title: "looking for brand embassedor ", description: "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.", budget: "25", platform: ['youtube'] },
        { id: 4, user: 2, title: "influence in the beauty nechie", description: "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.", budget: "25", platform: ['insta', 'twitter', 'youtube', 'pinterest'] }]
    const requests = useSelector(state => state.activeRequest.requests)
    // console.log(requests,'here',requests.length>3)
    const initalEditCardState = { 
        applyCard: "close", 
        overlay: "" 
    }
    const initalApplication = {
        price:"",
        pitch:"", 
        requestId:"", 
        userId:sessionStorage.getItem("u")
    }
    const [editCard, setEditCard] = useState(initalEditCardState)
    const [applicationDetail, setapplicationDetail] = useState(initalApplication)
    const closeEditCard = (e)=>{
        e.preventDefault() 
        setapplicationDetail(initalApplication)
        setEditCard(initalEditCardState)
    }
    const submitApplication = (e) =>{
        e.preventDefault()
        applyToRequest(applicationDetail)
        closeEditCard(e)
    }
    const layout = ()=>{

        if(requests !== undefined){
        return requests.map(req =>
            <div key={req._id} className="active-request-card">
                <div className="info">
                    <h3>{req.title}</h3>
                    <ul className="request-platforms">{req.platform ? req.platform.map(p => <li key={p}>{p}</li>) : null}</ul>
                    <div>@user</div>
                    <div>ad type </div>
                    <div>{req.budget}</div>
                    <p>{req.description}</p>
                    <button onClick={() =>{ 
                        setEditCard({ applyCard: "open", overlay: "overlay" })
                        setapplicationDetail({...applicationDetail,requestId: req._id
                        })
                    }} 
                    className="btn"> apply</button>
                </div>
            </div>
        )}else {
        return dummy.map(req =>
            <div key={req.id} className="active-request-card">
                <div className="info">
                    <h3>{req.title}</h3>
                    <ul className="request-platforms">{req.platform.map(p => <li key={p}>{p}</li>)}</ul>
                    <div>@user</div>
                    <div>ad type </div>
                    <div>{req.budget}</div>
                    <p>{req.description}</p>
                    <button onClick={() =>{ 
                        setEditCard({ applyCard: "open", overlay: "overlay" })
                        setapplicationDetail({...applicationDetail,requestId: req.id
                        })
                    }} 
                    className="btn"> apply</button>
                </div>
            </div>
        )}
    }

    return (
        <div className="active-request">
            <div className={`${editCard.overlay}`}>
            </div>
            <div className='padding-50'>
                filter
                <select>
                    <option>all</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </select>
            </div>
            <div className='container'>
                <form className={`edit-card ${editCard.applyCard}`}>
                    <button onClick={(e)=>closeEditCard(e)}>close</button>
                    <br></br>
                    <input 
                        className="width-80" 
                        placeholder="price" 
                        name="price" 
                        type="number"
                        value={applicationDetail.price}
                        onChange={
                            (e)=>setapplicationDetail({...applicationDetail,[e.target.name]:e.target.value})
                        } 
                    />
                    <textarea  
                        className="width-80" 
                        name="pitch"
                        placeholder="pitch yourself to this user, why should they choose to work with you" 
                        type="text"
                        value={applicationDetail.pitch} 
                        onChange={
                            (e)=>setapplicationDetail({...applicationDetail,[e.target.name]:e.target.value})
                        } 
                    />
                    <br></br>
                    <button onClick={(e)=>submitApplication(e)} >Submit Application</button>
                </form>
                { 
                layout()
                // requests[0].length > 0 ? 
                //     dummy.map(req =>
                //         <div key={req._id} className="active-request-card">
                //             <div className="info">
                //                 <h3>{req.title}</h3>
                //                 <ul className="request-platforms">{req.platform.map(p => <li key={p}>{p}</li>)}</ul>
                //                 <div>@user</div>
                //                 <div>ad type </div>
                //                 <div>{req.budget}</div>
                //                 <p>{req.description}</p>
                //                 <button onClick={() =>{ 
                //                     setEditCard({ applyCard: "open", overlay: "overlay" })
                //                     setapplicationDetail({...applicationDetail,requestId: req.id
                //                     })
                //                 }} 
                //                 className="btn"> apply</button>
                //             </div>
                //         </div>
                //     ):
                //     dummy.map(req =>
                //         <div key={req.id} className="active-request-card">
                //             <div className="info">
                //                 <h3>{req.title}</h3>
                //                 <ul className="request-platforms">{req.platform.map(p => <li key={p}>{p}</li>)}</ul>
                //                 <div>@user</div>
                //                 <div>ad type </div>
                //                 <div>{req.budget}</div>
                //                 <p>{req.description}</p>
                //                 <button onClick={() =>{ 
                //                     setEditCard({ applyCard: "open", overlay: "overlay" })
                //                     setapplicationDetail({...applicationDetail,requestId: req.id
                //                     })
                //                 }} 
                //                 className="btn"> apply</button>
                //             </div>
                //         </div>
                //     )
                }
            </div>

        </div>
    )
}

export default ActiveRequest
