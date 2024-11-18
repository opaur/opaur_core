import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SubscriptionPackages from "@/components/Tables/SubscriptionPackages";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Plans = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Subcriptions Plans" />

      <div className="flex flex-col gap-10">
        <SubscriptionPackages />
      </div>
    </DefaultLayout>
  );
};

export default Plans;
