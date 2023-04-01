import { colors, fonts, weights, radius, thickness, widths } from "@/theme";
import { Form, Input, Box, Button } from "@/components/models";
import React from "react";

const LoginForm:React.FC = () => (
    <Form formSize={{
        lg: { width: 400, height: 500 },
        md: { width: 350, height: 400 },
        sm: { width: 330, height: 380 },
        xs: { width: 300, height: 350 },
    }}
    backgorundColor={colors.c2}
    borderRadius={radius.r5}
    alignItems="center"
    flexDirection="column"
    justifyContent="space-around"
    outlineColor={colors.c3}
    outlineWidth={thickness.t2}>
        <Box as="h1" fontSize={fonts.f1}>Welcome Back!</Box>
        
        <Box as="label" 
        color={colors.c3}
        display="flex" 
        fontSize={fonts.f4}
        fontWeight={weights.bold}
        flexDirection="column"
        width={widths.w2}>Email
            <Input borderWidth={thickness.t3} borderColor={colors.c3} borderRadius={radius.r6} fontSize={fonts.f4} color={colors.c2} backgroundColor={colors.c3} name="email" type="email" required/>
        </Box>

        <Box as="label" 
        color={colors.c3}
        display="flex" 
        fontSize={fonts.f4}
        fontWeight={weights.bold}
        flexDirection="column"
        width={widths.w2}>Password
            <Input borderWidth={thickness.t3} borderColor={colors.c3} borderRadius={radius.r6} fontSize={fonts.f4} color={colors.c2} backgroundColor={colors.c3} name="password" type="password" required/>
        </Box>

        <Button fontSize={fonts.f2} fontWeight={weights.bold} color={colors.c2} backgroundColor={colors.c4} padding="10px 20px" borderRadius={radius.r3}>
            Login
        </Button>

        <Button fontSize={fonts.f2} fontWeight={weights.bold} color={colors.c2} backgroundColor={colors.c4} padding="10px 20px" borderRadius={radius.r3}>
            Sign Up
        </Button>

    </Form>
)

export default LoginForm