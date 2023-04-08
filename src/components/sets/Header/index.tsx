import { Box } from "@/components/models"
import { colors, widths, fonts, weights } from "@/theme"
import { deleteCookie } from "cookies-next"
import UserIcon from "../UserIcon"
import Link from "next/link"
import style from "@/styles/global.module.css"
import React from "react"

interface HeaderProps {
    user: {
        username: string;
        admin: boolean;
        email: string;
    }
}

const Header: React.FC<HeaderProps> = ({ user }) => {

    const disconnect = () => {
        deleteCookie("loggedAs")
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
                <Link href="/" onClick={disconnect} className={style.underline}>Desconectar</Link>
            </Box>
            <Box as="span" fontSize={fonts.f5} fontWeight={weights.bold}>
                Scientific Event
            </Box>
        </Box>
    )
}

//20:04
export default Header