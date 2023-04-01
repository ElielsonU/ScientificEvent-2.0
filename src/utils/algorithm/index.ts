import { css } from "styled-components"
import { BreakPointsProps } from "@/theme/types"

const getElement = (obj: any, key: string) => {
    if (Object.hasOwn(obj, key)) {
        return obj[key]
    }
    return false
}

const getMediaQuery = (breakpoints: BreakPointsProps, breakpoint: any) => {
    const value = getElement(breakpoints, breakpoint.name)
    if (value) {
        return css`
            @media (max-width: ${breakpoint.size}px) {
                width: ${value.width}px;
                height: ${value.height}px;
            }
        `
    }
}

export { getElement, getMediaQuery }