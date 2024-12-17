"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BrandsTable from "@/components/Tables/BrandsTable";
import { useEffect, useState } from "react";
interface BrandsUsersClientProps {
  userId: string;
}

export default function TablesPage({ userId }: BrandsUsersClientProps) {
  const [data, setData] = useState<any[]>([]); // Usa `any[]` para flexibilidad.
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`api/brands?user_id=${userId}`);
        if (!response.ok) {
          throw new Error("Error al recuperar los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading)
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Tables" />
        <div></div>
        <div className="flex flex-col gap-10">
        <p>Cargando datos...</p>
        </div>
      </DefaultLayout>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div></div>
      <div className="flex flex-col gap-10">
        <BrandsTable data={data} />
      </div>
    </DefaultLayout>
  );
}
