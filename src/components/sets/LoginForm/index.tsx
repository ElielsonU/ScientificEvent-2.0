import { colors, fonts } from "@/theme";
import { Form, Input, Box } from "@/components/models";
import React from "react";

const LoginForm:React.FC = () => (
    <Form formSize={{
        lg: { width: 400, height: 500 },
        md: { width: 350, height: 400 },
    }} 
    backgorundColor={colors.c2}
    borderRadius="10px"
    alignItems="center"
    flexDirection="column"
    justifyContent="space-around">
        <Box as="h1" fontSize={fonts.f1}>Welcome Back!</Box>
        
        <Box as="label" 
        color={colors.c3}
        display="flex" 
        fontSize={fonts.f4}
        fontWeight="800" 
        flexDirection="column"
        width="80%">Email
            <Input borderWidth="2px" borderColor={colors.c3} borderRadius="5px" fontSize={fonts.f4} color={colors.c2} backgroundColor={colors.c3}
            name="email"/>
        </Box>

        <Box as="label" 
        color={colors.c3}
        display="flex" 
        fontSize={fonts.f4}
        fontWeight="800" 
        flexDirection="column"
        width="80%">Password
            <Input borderWidth="2px" borderColor={colors.c3} borderRadius="5px" fontSize={fonts.f4} color={colors.c2} backgroundColor={colors.c3} type="password"/>
        </Box>

        
    </Form>
)

export default LoginForm