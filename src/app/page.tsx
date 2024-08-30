import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {LoginServer} from "./components/login-supabase-server";
import {cookies} from 'next/headers'
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import { createDynamicallyTrackedSearchParams } from "next/dist/client/components/search-params";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};


export default function Home() {
const supabase = createServerComponentClient({cookies});
  return (
  /*
    <div>
    <h1>Welcome to the Home Page</h1>
    <LoginServer />
  </div>
  */
          
         
              <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
          
      

  );
}
