'use server'
import { cookies } from 'next/headers'
export default async function cookieauth(accesskey:string) {
    const cookieName=''+process.env.AUTHCOOKIENAME
    cookies().set(cookieName, accesskey, { expires: 1000*60*5 })
}