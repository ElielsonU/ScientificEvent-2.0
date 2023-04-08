import { Form, Box, Input, Button } from "@/components/models"
import { fonts, radius, colors, widths, weights } from "@/theme"
import { postarticle } from "@/utils/api-connection"
import React, { useState } from "react"
import { useRouter } from "next/router"

interface ArticlesSubmitFormProps { email: string }

const ArticlesSubmitForm:React.FC<ArticlesSubmitFormProps> = ({ email }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const router = useRouter()

    const titleHandler = (event: React.ChangeEvent) => {
        setTitle((event.target as HTMLInputElement).value)
    }

    const contentHandler = (event: React.ChangeEvent) => {
        setContent((event.target as HTMLInputElement).value)
    }

    const formSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        postarticle(title, content, email, router)
        setTitle("")
        setContent("")
    }

    return (
        <Form onSubmit={formSubmit
} flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        formSize={{
            lg: { width: 450, height: 500 },
            md: { width: 370, height: 490 },
            sm: { width: 350, height: 470 },
            xs: { width: 320, height: 450 },
        }} >
            <Box as="h1" color={colors.c2} fontSize={fonts.f2} 
            >Submit Article</Box>

            <Input placeholder="Title" backgroundColor={colors.c4} borderRadius={radius.r6} color={colors.c1} fontSize={fonts.f4} textAlign="center" width={widths.w2} padding="2px" value={title} onChange={titleHandler} required/>

            <textarea 
            placeholder="Content"
            value={content}
            onChange={contentHandler}
            required
            style={{
                backgroundColor: colors.c1,
                borderRadius: "5px 5px 0px 0px",
                color: colors.c2,
                borderWidth: "2px 3px",
                borderColor: colors.c4,
                fontSize: fonts.f6,
                flexGrow: 1,
                padding: "3px 15px",
                width: widths.w2
            }}/>
            <Box height="50px" backgroundColor={colors.c4} borderRadius="0px 0px 5px 5px" width={widths.w2} display="flex" flexDirection="row-reverse" hideOverflow> 
                <Button 
                backgroundColor={colors.c4}
                color={colors.c1}
                fontSize={fonts.f4} 
                fontWeight={weights.bold}
                type="submit"
                width={widths.w4} 
                >Submit</Button>
            </Box>

        </Form>
    )
}

export default ArticlesSubmitForm