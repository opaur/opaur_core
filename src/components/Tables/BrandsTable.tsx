import { BRAND } from "@/types/brand";
import { BrandUser } from "@/types/brands_user";
import Image from "next/image";


interface BrandsTableProps {
  data: BrandUser[];
}
const BrandsTable = ({ data }: BrandsTableProps) => {
  return (
    
    <div className="rounded-xs border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Brands
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-xs bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              My Brands
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Owner
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Created At
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
        </div>
        
        {data.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={brand.id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="shrink-0">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.brand?.name}
              </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
            {brand.is_brand_owner ? 'Yes' : 'No'}
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.brand?.created_at}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.brand?.category?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsTable;
