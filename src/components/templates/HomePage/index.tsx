import { getuser } from "@/utils/api-connection"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import { colors, sources, widths } from "@/theme"

import Head from "next/head"
import { Button, Box } from "@/components/models"
import { Footer, Header, ArticlesSubmitForm, ArticlesViewer } from "@/components/sets"
import Image from "next/image"

const HomePage = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        admin: false,
    })
    const [verified, setVerified] = useState(false)
    
    const router = useRouter()
    useEffect(() => {
        (async function getActualUser() { 
            setUser(await getuser(router)) 
            setVerified(true)
        })()
    }, [])

    return ( 
        <>
            <Head>
                <title>Scientific event - Login</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
            </Head>
            <Box 
            alignItems="center"
            backgroundSize="cover"
            backgroundImage={sources.homeBackground} 
            borderColor={colors.c4}
            borderWidth="10px"
            display="flex" 
            flexDirection="column"
            id="auto-page-height"  
            height={widths.w1}
            width={widths.w1}
            overflow="hidden">
                <Header user={user}/>
                
                <Box 
                as="main" 
                display="flex"
                flexGrow="1"  
                alignItems="center"
                justifyContent="space-around"
                width={widths.w1}>
                    {verified
                    ?user.admin
                        ?<ArticlesViewer/>
                        :<ArticlesSubmitForm email={user.email}/>
                    :<Image src={sources.loader} width={400} height={270} alt="loader"/>
                    }
                </Box>

                <Footer/>
            </Box>
        </>
    )
}

export default HomePage