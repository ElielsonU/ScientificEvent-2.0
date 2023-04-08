import axios from "axios"
import { deleteCookie, setCookie } from "cookies-next"
import { NextRouter } from "next/router"
const databaseToken = "247fb30c-2143-4fb6-96bf-d32680886d11"

const login = async ( email: string, password: string ) => {    
    const database = localStorage.getItem(databaseToken)

    const data = {
        email, 
        password, 
        database
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
    const database = localStorage.getItem(databaseToken)

    const data = {
        username,
        password, 
        admin,
        email, 
        database
    }

    try {
        const res = await axios.post("http://localhost:3000/api/signup", data)

        setCookie("loggedAs", res.data.token)
        localStorage.setItem(databaseToken, res.data.msg)

        return true;
    } catch (e: any) { alert(e.response.data.msg) }
    return false;
}

const getuser = async ( router: NextRouter ) => {
    const database = localStorage.getItem(databaseToken)

    const data = { database }

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

const postarticle = async ( title: string, content: string, email: string, router: NextRouter) => {
    const database = localStorage.getItem(databaseToken)

    const data = {
        content, 
        email,
        database,
        title, 
    }

    try {
        const res = await axios.post("http://localhost:3000/api/postarticle", data) 
        console.log(res.data)
        localStorage.setItem(databaseToken, res.data.msg)

    } catch (e: any) { 
        alert(e.response.data.msg)
        if (e.response.status == 401) {
            deleteCookie("loggedAs")
            router.replace("/")
        }
    }
}

export { login, signup, getuser, postarticle }