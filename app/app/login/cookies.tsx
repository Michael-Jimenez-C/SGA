'use server'
import { cookies } from 'next/headers'
export default async function cookieauth(accesskey:any) {
    const cookieName=''+process.env.AUTHCOOKIENAME
    cookies().set(cookieName+'NAME', accesskey[0], { maxAge:60*30 })
    cookies().set(cookieName+'PASS', accesskey[1], { maxAge:60*30 })
}