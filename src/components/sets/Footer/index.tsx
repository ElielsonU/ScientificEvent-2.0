import React from "react"
import { Box } from "@/components/models"
import { colors, fonts } from "@/theme"

const Footer: React.FC = () => {
    return (
        <Box as="footer" display="flex" alignItems="center">
            <Box as="span" color={colors.c2} fontSize={fonts.f5}>
                Todos os direitos reservados ©
            </Box>
        </Box>
    )
}

export default Footer