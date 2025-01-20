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
  const { data: { user },} = await supabase.auth.getUser();
  
  console.log("User data on server:", user); // Imprime en la consola del servidor

  if(user){
    redirect('/dashboard')
  }
  return (    
      <SignInClient />    
  );
};

export default SignIn;
