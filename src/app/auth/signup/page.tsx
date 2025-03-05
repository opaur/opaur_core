export const dynamic = "force-dynamic"; 

import { Metadata } from "next";
import SignUpClient from "./page.client";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};

const SignUp= async() => {
  const supabase= createServerComponentClient({cookies})
  const { data: { user },} = await supabase.auth.getUser();
  if(user){
    redirect('/dashboard')
  }
  return (    
      <SignUpClient />    
  );
};

export default SignUp;
