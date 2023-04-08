import React from "react"
import { Box } from "@/components/models"
import { colors, fonts, weights, widths } from "@/theme"

const Footer: React.FC = () => {
    return (
        <Box as="footer" display="flex" justifyContent="center" width={widths.w1}>
            <Box as="span" color={colors.c2} padding="4px 0px" fontSize={fonts.f5} fontWeight={weights.bold}>
                Todos os direitos reservados ©
            </Box>
        </Box>
    )
}

export default Footer