import { Metadata } from "next";
import ResetPasswordClient from "./page.client";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};
const ResetPassword = async() => {  
  
  const supabase= createServerComponentClient({cookies})
  const { data: { user },} = await supabase.auth.getUser();



  if(user){
redirect('/dashboard')
  }
  return (    
      <ResetPasswordClient />    
  );
};

export default ResetPassword;
