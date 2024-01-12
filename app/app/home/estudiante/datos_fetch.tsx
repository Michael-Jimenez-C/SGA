'use server'
import { cookies } from 'next/headers'
export default async function datos_fetch(){
  const cookieName=''+process.env.AUTHCOOKIENAME;
  var usuario=cookies().get(cookieName+'NAME');
  return usuario['value']
}