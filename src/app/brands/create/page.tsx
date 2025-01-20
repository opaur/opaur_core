import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BrandForm from "@/components/BrandForm/BrandForm";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Plans = async() => {
  
  const supabase= createServerComponentClient({cookies})
  const { data: { user },} = await supabase.auth.getUser();

  if(!user)
  {
    redirect('/auth/signin')
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create your brand" />

      <div className="flex flex-col gap-10">
        {/* <TablesPage userId={user.id}/>     */}
        <BrandForm userId={user.id} />
        {/* <BrandForm /> */}
      </div>
    </DefaultLayout>
  );
};

export default Plans;
