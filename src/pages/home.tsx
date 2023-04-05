import HomePage from "@/components/templates/HomePage"
import axios from "axios"
import { deleteCookie, removeCookies } from "cookies-next"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {

   const loggedAs = context.query.token
   const users = context.query.users

   if (typeof loggedAs == "string" && typeof users == "string") {
      try {
         const data = {
             loggedAs, users
         }
         const res = await axios.post("http://localhost:3000/api/getuser", data)
         console.log(res.data)
 
     } catch (e: any) { console.log(e.response.data.msg) }

      return {
         props: {
            a: ""
         }
      }
   }

   return {
      props: {

      }
   }
} 



export default function Home(props?: {a?: ""}) {
   if (!props?.a){
      deleteCookie("loggedAs")
   }
 
   return <HomePage/>
}