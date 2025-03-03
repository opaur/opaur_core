import { Metadata } from "next";
import {cookies} from 'next/headers'
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import LandingPage from "./landing/page";

export const metadata: Metadata = {
  title: "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};


export default async function Home() {
  const supabase = createServerComponentClient({cookies});
  const {data:{user}}= await supabase.auth.getUser()
  return (
    <LandingPage user={user}/>       
  );
}
