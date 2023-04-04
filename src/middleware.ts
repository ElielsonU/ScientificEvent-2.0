import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req, res) => {
    const loggedAS = req.cookies.get("loggedAs")
    const href = req.nextUrl.href
    const dangerousHref = (href.includes("_next") || href.includes("."))
    if (loggedAS) {
        if (href != "http://localhost:3000/home" && !dangerousHref) {
            return NextResponse.redirect("http://localhost:3000/home")
        }
    } else if (href != "http://localhost:3000/" && !dangerousHref) {
        return NextResponse.redirect("http://localhost:3000/")
    }
}