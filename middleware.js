import { NextResponse } from 'next/server'

export function middleware(request) {

    const response = NextResponse.next()

    const url = request.nextUrl.clone()

    if (url.pathname === '/') {
        url.pathname = '/signin'
        return NextResponse.redirect(url)
    }

    let find = false;
    let allCookies = request.cookies.getAll()

    allCookies.map(cookies => {
        if(cookies.name === "selectedTheme")
        {
            find = true
        }
    })

    if (!find)
    {
        response.cookies.set('selectedTheme', 'fifth-theme')
    }

    return response
}



// response.cookies.set("accessToken", "okan", {
//     httpOnly: true,
//     // Only send cookie over https when not in dev mode
//     secure: process.env.NODE_ENV !== "development",
//     // 1 hour
//     maxAge: 60 * 60,
//     // Available everywhere within the site
//     path: "/"
// })
