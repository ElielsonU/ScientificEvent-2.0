import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req, res) => {
    const loggedAs = req.cookies.get("loggedAs")
    const href = req.nextUrl.pathname

    const dangerousHref = (href.includes("_next") || 
    href.includes("/api/") || href.includes("."))

    if (!dangerousHref) {
        if (loggedAs) {
                if (href != "/home") {
                    return NextResponse.redirect(`http://localhost:3000/home`)
                }
        } else if (href != "/") {
            return NextResponse.redirect("http://localhost:3000/")
        }
    }
}