import { Box } from "@/components/models"
import { colors, widths, sources, fonts, weights } from "@/theme"
import { deleteCookie } from "cookies-next"
import UserIcon from "../UserIcon"
import Link from "next/link"
import style from "@/styles/global.module.css"
import Image from "next/image"
import React from "react"

const Header: React.FC = () => {

    const disconnect = () => {
        deleteCookie("loggedAs")
    }

    return (
        <Box 
        as="header" 
        backgroundColor={colors.c4}
        color={colors.c2} 
        display="flex"
        width={widths.w1}>
            <Box height="50px" display="flex" flexDirection="column" justifyContent="center">
                <UserIcon/>
                <Box as="p" fontSize={fonts.f5} fontWeight={weights.bold}>Elielson</Box>
                <Link href="/" onClick={disconnect} className={style.underline}>Desconectar</Link>
            </Box>
        </Box>
    )
}

//20:04
export default Header