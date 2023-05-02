import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-x');
    const currentURl = new URL(req.url)

    if(!token)
        return NextResponse.redirect(new URL('/auth', req.url));
    
    if(currentURl.pathname == '/')
        return NextResponse.redirect(new URL('/auth', req.url));

    return NextResponse.next();
}


export const config = {
    matcher: [
        '/user',
        '/'
    ]
}