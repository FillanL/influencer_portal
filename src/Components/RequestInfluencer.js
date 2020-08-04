import React, { useState } from 'react'

const RequestInfluencer = () => {
    const initState = {
        title: "",
        atName: "",
        category: "",
        budget: ""
    }
    const [requestForm, setRequestForm] = useState(initState)
    console.log(requestForm)
    return (
        <section className="padding-120 request-influencer">
            <div className="container">
                <form>
                    <div className="info-container">
                        <input
                            required
                            className=""
                            placeholder="Title"
                            type="text"
                            name="title"
                            value={requestForm.title}
                            onChange={(e) => setRequestForm({
                                ...requestForm,
                                [e.target.name]: e.target.value
                            })}
                        />
                        <input
                            className=""
                            placeholder="@Names"
                            type="text"
                            name="atName"
                            value={requestForm.atName}
                            onChange={(e) => setRequestForm({
                                ...requestForm,
                                [e.target.name]: e.target.value
                            })}
                        />
                        <input
                            className=""
                            placeholder="Category"
                            type="text"
                            name="category"
                            value={requestForm.category}
                            onChange={(e) => setRequestForm({
                                ...requestForm,
                                [e.target.name]: e.target.value
                            })}
                        />
                        <input
                            className=""
                            placeholder="Budget"
                            type="number"
                            name="budget"
                            value={requestForm.budget}
                            onChange={(e) => setRequestForm({
                                ...requestForm,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>
                    <textarea
                        className="influencer-textarea"
                        type="text"
                        name=""
                        placeholder="Describe what you were trying to promote"
                    />
                    <div className="importSampleVideo">

                        <label 
                            htmlFor="avatar">
                            Choose Your AD images or Video:
                        </label>

                        <input 
                            type="file"
                            id="avatar" 
                            name="avatar"
                            accept="image/png,image/jpeg" 
                        />
                    </div>
                            {/* branding */}
                    <textarea
                        className="influencer-textarea influencer-textarea-brand"
                        type="text"
                        name=""
                        placeholder="Tell us about your brand, and why influencers should want to work with you?"
                    />
                    <button
                        className="btn sub-btn"
                        type="submit"
                        name=""
                    >Submit</button>
                </form>
            </div>
        </section>
    )
}

export default RequestInfluencer
