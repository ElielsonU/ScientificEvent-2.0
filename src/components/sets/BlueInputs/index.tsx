import { colors, fonts, weights, radius, thickness, widths } from "@/theme";
import { Input, Box } from "@/components/models";
import React, { PropsWithChildren } from "react"

interface BlueInputProps extends PropsWithChildren {
    onChange?: React.ChangeEventHandler;
    type?: "text"|"email"|"password";
    name?: string;
    minLength?: number;
    value?: any;
}

const BlueInput:React.FC<BlueInputProps> = ({
    onChange,
    type,
    name,
    minLength,
    value,
    children,
}) => {
    return (
        <Box as="label" 
            color={colors.c3}
            display="flex" 
            fontSize={fonts.f4}
            fontWeight={weights.bold}
            flexDirection="column"
            width={widths.w2}>{children}
                <Input borderWidth={thickness.t3} borderColor={colors.c3} borderRadius={radius.r6} fontSize={fonts.f4} color={colors.c2} backgroundColor={colors.c3} name={name} type={type} onChange={onChange} value={value} minLength={minLength} required/>
        </Box>
    )
}

export default BlueInput