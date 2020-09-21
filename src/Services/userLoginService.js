import axios from "axios"
const baseUrl = "http://localhost:3003/user"

export const newUser = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/newUser`,userObject)
    console.log(user)
} 
export const loginUser = async(userObject) =>{
  
    const user = await axios.post(`${baseUrl}/login`, userObject)
    // const token = await user.data.token
    // if(token){
    //     localStorage.setItem('postedU',token)
    // } else
    console.log(user)
} 
export const isUserAuth = async(userObject) =>{
    // if ()
    const token = localStorage.getItem('postedU')
    const user = await axios.get(`${baseUrl}/login`,{
        Authorization:'Bearer ' + token
    })
    const validUser = await user.data.isAuth
    if(validUser){
        console.log('good token')
    }else console.log('bad token')
} 
export const findUserById = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/findUserById`,userObject)
    console.log(user)
} 
export const findUserByEmail = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/findUserByEmail`,userObject)
    console.log(user)
} 