import axios from "axios"
import { deleteCookie, setCookie } from "cookies-next"
import { redirect } from "next/dist/server/api-utils"
import { NextRouter } from "next/router"
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

        return true;
    } catch (e: any) { alert(e.response.data.msg) }
    return false;
}

const signup = async ( username: string, email: string, password: string, admin: boolean ) => {
    const users = localStorage.getItem(usersToken)

    const data = {
        username,
        password, 
        admin,
        email, 
        users
    }

    try {
        const res = await axios.post("http://localhost:3000/api/signup", data)

        setCookie("loggedAs", res.data.token)
        localStorage.setItem(usersToken, res.data.msg)

        return true;
    } catch (e: any) { alert(e.response.data.msg) }
    return false;
}

const getuser = async (router: NextRouter) => {
    const users = localStorage.getItem(usersToken)

    const data = { users }

    try {
        const res = await axios.post("http://localhost:3000/api/getuser", data)
    
        const user = Object(res.data.user)
        
        return user
    } catch (e: any) {
        alert(e.response.data.msg)
        deleteCookie("loggedAs")
        router.replace("/")
    }

}

export { login, signup, getuser }