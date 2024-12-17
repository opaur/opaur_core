import { Metadata } from "next";
import TablesPage from "./page.client";
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

  if(!user){
redirect('/auth/signin')
  }
  return (    
      <TablesPage userId={user.id}/>    
  );
};

export default ResetPassword;
