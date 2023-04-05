import axios from "axios"
import { setCookie } from "cookies-next"
const usersToken = "247fb30c-2143-4fb6-96bf-d32680886d11"
const articlesToken = "542e066e-fec1-46ab-a55c-9e34ba41ed33"

const login = async ( email: string, password: string ) => {    
    const users = localStorage.getItem(usersToken)

    const data = {
        email, 
        password, 
        users
    }

    try {
        const res = await axios.post("http://localhost:3000/api/login", data)
        const token = res.data.token

        setCookie("loggedAs", token)

        return localStorage.getItem(usersToken);
    } catch (e: any) { alert(e.response.data.msg) }
    return false;
}

const signup = async ( username: string, email: string, password: string ) => {
    const users = localStorage.getItem(usersToken)

    const data = {
        email, 
        username,
        password, 
        users
    }

    try {
        const res = await axios.post("http://localhost:3000/api/signup", data)

        setCookie("loggedAs", res.data.token)
        console.log(email, password)
        localStorage.setItem(usersToken, res.data.msg)

        return localStorage.getItem(usersToken);
    } catch (e: any) { alert(e.response.data.msg) }
    return false;
}

export { login, signup }