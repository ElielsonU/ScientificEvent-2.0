import { colors, fonts, weights, radius, thickness, widths } from "@/theme";
import { Form, Box, Button } from "@/components/models";
import { BlueInput } from "@/components/sets"
import React, { useState } from "react";

interface SignUpFormProps { changeForm: React.MouseEventHandler; }

const SignUpForm:React.FC<SignUpFormProps> = ({
    changeForm,
}) => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const emailHandler = (event: React.ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setEmail(value)
    }

    const passwordHandler = (event: React.ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setPassword(value)
    }

    const usernameHandler = (event: React.ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setUsername(value)
    }

    const formSubmit = (event: React.FormEvent) => { 
        event.preventDefault()
     }

    return <Form formSize={{
        lg: { width: 400, height: 500 },
        md: { width: 350, height: 400 },
        sm: { width: 330, height: 380 },
        xs: { width: 300, height: 350 },
    }}
    backgorundColor={colors.c2}
    borderRadius={radius.r5}
    alignItems="center"
    flexDirection="column"
    justifyContent="space-evenly"
    outlineColor={colors.c3}
    outlineWidth={thickness.t2}
    onSubmit={formSubmit}>
        <Box as="h1" fontSize={fonts.f1}>Join Us!</Box>
        
        <BlueInput onChange={usernameHandler} value={username} name="username" type="text">
            Username
        </BlueInput>

        <BlueInput onChange={emailHandler} value={email} name="email" type="email">
            Email
        </BlueInput>

        <BlueInput onChange={passwordHandler} value={password} name="password" type="password">
            Password
        </BlueInput>

        <Box width={widths.w2} display="flex" flexDirection="row-reverse" justifyContent="space-between">
            <Button fontSize={fonts.f2} fontWeight={weights.bold} color={colors.c4} backgroundColor={colors.c2} padding="10px 20px" borderRadius={radius.r3} borderWidth={thickness.t2}>
                Sign Up
            </Button>
            
            <Button fontSize={fonts.f2} fontWeight={weights.bold} color={colors.c2} backgroundColor={colors.c4} padding="10px 20px" borderRadius={radius.r3} borderColor={colors.c4} borderWidth={thickness.t2} onClick={changeForm}>
                Login
            </Button>
        </Box>
    </Form>
}

export default SignUpForm