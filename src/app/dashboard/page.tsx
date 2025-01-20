import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {cookies} from 'next/headers'
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {redirect} from 'next/navigation'

export const metadata: Metadata = {
  title:
    "Opaur-Dashboard",
  description: "Opaur-Dashboard",
};


const Dashboard = async () => {
const supabase = createServerComponentClient({cookies});
const {data:{user}}= await supabase.auth.getUser()
if(!user){
  redirect('/')
  
}
    return (
           
  <DefaultLayout>
  <ECommerce />
</DefaultLayout>    
    
  );
}
export default Dashboard;