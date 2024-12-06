import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BrandForm from "@/components/BrandForm/BrandForm";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Plans = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create your brand" />

      <div className="flex flex-col gap-10">
        <BrandForm />
      </div>
    </DefaultLayout>
  );
};

export default Plans;
