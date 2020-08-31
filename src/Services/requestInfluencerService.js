import axios from "axios"
const baseUrl = "http://localhost:3009/request"

export const requestInfluencer=async(requestObject)=> async dispatch =>{
    const request = await axios.post(`${baseUrl}/newRequestPromo`,requestObject)
   
    console.log(request)
}
export const getAllRequest=()=>async dispatch =>{
    let requests = await axios.get(`${baseUrl}/getAllRequest`)
    console.log(requests.data)
    if(requests.status === 200){
        await dispatch({
            type:"GET_ALL_REQUEST",
            payload: requests.data
        })
    }
}
export const getRequestByUserId=()=>async dispatch =>{
    let requests = await axios.post(`${baseUrl}/getRequestByUser`,{userId: sessionStorage.getItem('u')})
    // console.log(requests.data)
    if(requests.status === 200){
        await dispatch({
            type:"GET_USER_REQUESTS",
            payload: requests.data
        })
    }
}