import axios from "axios"
const baseUrl = "http://localhost:3003/user"

export const newUser = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/newUser`,userObject)
    console.log(user)
} 
export const findUserById = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/findUserById`,userObject)
    console.log(user)
} 
export const findUserByEmail = async(userObject) =>{
    const user = await axios.post(`${baseUrl}/findUserByEmail`,userObject)
    console.log(user)
} 