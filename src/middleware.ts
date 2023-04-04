import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req, res) => {
    const loggedAS = req.cookies.get("loggedAs")
    const href = req.nextUrl.href
    
    if (loggedAS) {
        if (href != "http://localhost:3000/home" && !href.includes("_next")) {
            return NextResponse.redirect("http://localhost:3000/home")
        }
    } else if (href != "http://localhost:3000/" && !href.includes("_next")) {
        return NextResponse.redirect("http://localhost:3000/")
    }
}