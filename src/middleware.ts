import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req, res) => {
    const loggedAs = req.cookies.get("loggedAs")
    const href = req.nextUrl.pathname
    const admin = Boolean(req.cookies.get("admin")?.value)

    const paths = ["/home", "/articles",]
    
    const dangerousHref = (href.includes("_next") || 
    href.includes("/api/") || href.includes("."))
    
    if (!dangerousHref) {
        if (href != "/") {
            if (!paths.find((url) => href.startsWith(url))) {
                return NextResponse.redirect("http://localhost:3000/")
            }
        }

        if (!loggedAs) {
            if (href != "/") {
                return NextResponse.redirect("http://localhost:3000/")
            }
            return
        }
        
        if (href == "/") {
            return NextResponse.redirect("http://localhost:3000/home")
        }

        if(!admin) {
            if (href != "/home") {
                return NextResponse.redirect("http://localhost:3000/home")
            }
        }
    }
}