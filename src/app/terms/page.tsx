export const dynamic = "force-dynamic"; 

import { Metadata } from "next";
import ContactUsClient from "./page.client"; 
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title:
    "Opaur - Terms and Conditions",
  description: "Opaur - Terms and Conditions",
};

export default async function ContactUs() {
  const supabase = createServerComponentClient({cookies});
  const {data:{user}}= await supabase.auth.getUser()
    return (
    
                <ContactUsClient user={user}/>       
      
    );
  }