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
  // Obtener sesión
  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData?.session?.access_token;

  if (!accessToken) {
    redirect("/auth/signin");
  }

  // Validar usuario contra el servidor de Supabase
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData?.user) {
    redirect("/auth/signin");
  }

  return (
    <TablesPage 
      userId={userData.user.id} 
      accessToken={accessToken} 
    />
  );
};

export default ResetPassword;
