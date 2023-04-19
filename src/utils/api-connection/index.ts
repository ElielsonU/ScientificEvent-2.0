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

const postarticle = async ( title: string, content: string, email: string) => {
    const user_id = JSON.parse(String(localStorage.getItem("user"))).id

    const data = {
        content, 
        user_id,
        email,
        title, 
    }

    try {
        const res = await axios.post("http://localhost:8000/articles", data) 
        
        alert("Article submited!")

    } catch (e: any) { 
        alert(e.response.data.msg)
    }
}

const getarticle = async (id: number | undefined) => {
    if (id) {
        try {
            const res = await axios.get(`http://localhost:8000/articles?_start=${id-1}&_end=${id}`)
            
            return res.data[0]
        } catch (e: any) {
            alert(e.response.data.msg)
        }   
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

const getarticleslength = async () => {
    try {
        const res = await axios.get("http://localhost:8000/articles/lenght")
        return Number(res.data.msg)
    } catch (e: any) {
        alert(e.response.data.msg)
    }
}

export { login, signup, postarticle, getarticle, getarticlespage, getarticleslength }