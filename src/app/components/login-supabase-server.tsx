import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Login from "./login-supabase-client";

export async function LoginServer() {
    const supabase= createServerComponentClient({cookies})
    const {data:{session}}= await supabase.auth.getSession()

    return <Login session={session}/>
}