import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-x');
    if(!token)
        return NextResponse.redirect(new URL('/auth/login', req.url));

    return NextResponse.next();
}


export const config = {
    matcher: [
        '/user'
    ]
}