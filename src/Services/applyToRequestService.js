import axios from "axios"
// import {baseUrl} from './util'
const baseUrl = "http://localhost:3009/apply"

export const applyToRequest=async(applyObject)=>{
    const res = await axios.post(`${baseUrl}/newPromoAppilcation`,applyObject)
    console.log(res,"applied")
}
export const getApplicationByRequestId = async(requestIdObject) =>{
    const applications = axios.post(`${baseUrl}`,requestIdObject)
    console.log(applications)
}