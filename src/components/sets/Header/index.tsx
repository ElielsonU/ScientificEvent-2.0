import { Box } from "@/components/models"
import { colors, widths, fonts, weights } from "@/theme"
import { deleteCookie } from "cookies-next"
import UserIcon from "../UserIcon"
import Link from "next/link"
import style from "@/styles/global.module.css"
import React from "react"
import { useRouter } from "next/router"

interface HeaderProps {
    user: {
        username: string;
        admin: boolean;
        email: string;
    }
}

const Header: React.FC<HeaderProps> = ({ user }) => {

    const router = useRouter()

    const disconnect = () => {
        deleteCookie("loggedAs")
        deleteCookie("admin")
        router.push("/")
    }

    return (
        <Box 
        as="header" 
        alignItems="center"
        backgroundColor={colors.c4}
        color={colors.c2} 
        display="flex"
        justifyContent="space-between"
        padding="4px 8px"
        width={widths.w1}>
            <Box height="50px" display="flex" flexDirection="column" justifyContent="center" gap="4px">
                <UserIcon/>
                <Box as="p" fontSize="20px" fontWeight={weights.bold}>{user.username}</Box>
                <a onClick={disconnect} className={style.underline}>Desconectar</a>
            </Box>
            {user.admin
            ?<Link href="/" className={style.underline} style={{
                fontSize: fonts.f5,
                fontWeight: weights.bold
            }}>View Articles</Link>
            :<Box as="span" fontSize={fonts.f5} fontWeight={weights.bold}>
            Scientific Event
            </Box>}
        </Box>
    )
}

//20:04
export default Header