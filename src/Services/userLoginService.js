import axios from "axios"
const baseUrl = "http://localhost:3003/user"
const baseAuthUrl = "http://localhost:3003/auth"

export const newUser = async (userObject) => {
    const user = await axios.post(`${baseUrl}/newUser`, userObject)
    console.log(user)
}

export const loginUser = async (userObject) => {
    const user = await axios.post(`${baseUrl}/login`, userObject)
    const token = await user.data.token
    if (await token) {
        console.log(user)
        localStorage.setItem('postedU', token)
        return true
    }else return false
}

export const isUserAuth = async () => {
    
    const token = localStorage.getItem('postedU')
    const user = await axios.get(`${baseAuthUrl}/isAuth`, {
        headers: {Authorization: 'Bearer ' + token}
    })

    const validUser = await user.data.isAuth
    const needsRefreshed =  await user.data.refresh
    console.log("back from it",validUser, needsRefreshed)
    if (await validUser) {
        console.log('good token')
        return true
    } 
    if(await needsRefreshed){
        console.log("refresh")
       const newToken = await refreshToken()
       const accessToken = await newToken.data.accessToken
       if(await accessToken) {
           localStorage.setItem("postedU", accessToken)
           return true
        }else return false

    }
    console.log("no resizeTo")
    return false
}

export const refreshToken = async () => {
    const auth = await axios.get(`${baseAuthUrl}/refreshToken`, {
        Authorization: 'Bearer '
    })
    return auth
}

export const findUserById = async (userObject) => {
    const user = await axios.post(`${baseUrl}/findUserById`, userObject)
    console.log(user)
}

export const findUserByEmail = async (userObject) => {
    const user = await axios.post(`${baseUrl}/findUserByEmail`, userObject)
    console.log(user)
} 