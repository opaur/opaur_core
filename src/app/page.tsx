import { Metadata } from "next";
import {LoginServer} from "./components/login-supabase-server";
import {cookies} from 'next/headers'
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import LandingPage from "./landing/page";

export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};


export default function Home() {
const supabase = createServerComponentClient({cookies});
  return (
  
              <LandingPage/>       
    
  );
}
