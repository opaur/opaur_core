import { Metadata } from "next";
import SignInClient from "./page.client";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};

const SignIn = async() => {
  const supabase= createServerComponentClient({cookies})
  const {data:{session}}= await supabase.auth.getSession()
  if(session){
redirect('/dashboard')
  }
  return (    
      <SignInClient />    
  );
};

export default SignIn;
