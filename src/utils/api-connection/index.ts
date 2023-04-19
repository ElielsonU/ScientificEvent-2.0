import axios from "axios"
import { deleteCookie, setCookie } from "cookies-next"
import { NextRouter } from "next/router"
const databaseToken = "247fb30c-2143-4fb6-96bf-d32680886d11"

const login = async ( email: string, password: string, router: NextRouter ) => {    

    const data = {
        email, 
        password, 
    }

    try {
        const res = await axios.post("http://localhost:8000/aut/login", data)
        const user = res.data

        setCookie("loggedAs", user.token)
        setCookie("admin", user.admin)

        localStorage.setItem("user", JSON.stringify({
            username: user.username,
            id: user.id,
        }))

        router.push("/home")

    } catch (e: any) { alert(e.response.data.msg) }
}

const signup = async ( 
    username: string, 
    email: string, 
    password: string, 
    admin: boolean,
    router: NextRouter ) => {

    const data = {
        admin,
        email,
        username,
        password, 
    }

    try {
        const res = await axios.post("http://localhost:8000/users", data)

        const user = res.data

        setCookie("loggedAs", user.token)
        setCookie("admin", user.admin)

        localStorage.setItem("user", JSON.stringify({
            username: user.username,
            id: user.id,
        }))

        router.push("/home")
        
    } catch (e: any) { alert(e.response.data.msg) }
    
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
        const res = await axios.post("http://localhost:8000/articles", data) 
        
        alert("Article submited!")

    } catch (e: any) { 
        alert(e.response.data.msg)
    }
}

const getarticle = async () => {
    const database = localStorage.getItem(databaseToken)

    try {
        const res = await axios.get(`http://localhost:3000/api/article/${database}`)
        return res.data.articles
    } catch (e: any) {
        alert(e.response.data.msg)
        localStorage.removeItem(databaseToken)
        deleteCookie("loggedAs")
    }   
}

const getarticlespage = async (page: number) => {
    try {
        const res = await axios.get(`http://localhost:8000/articles/?_page=${page}`)
        return res.data
    } catch (e: any) {
        alert(e.response.data.msg)
    }
}


export { login, signup, postarticle, getarticle, getarticlespage }