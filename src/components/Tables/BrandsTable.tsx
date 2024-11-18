import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: "Free",
    revenues: 50,
    sales: 1,
    conversion: "Customize",
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 22,
    sales: 12,
    conversion: "Customize",
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 2,
    sales: 122,
    conversion: "Customize",
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 3,
    sales: 12,
    conversion: "Customize",
  }, {
    logo: "/images/brand/brand-04.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 3,
    sales: 12,
    conversion: "Customize",
  }, {
    logo: "/images/brand/brand-04.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 3,
    sales: 12,
    conversion: "Customize",
  }, {
    logo: "/images/brand/brand-04.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 3,
    sales: 12,
    conversion: "Customize",
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Twitter",
    visitors: "Premium",
    revenues: 2,
    sales: 15,
    conversion: "Customize",
  },
];

const BrandsTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Brands
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              My Brands
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Subscription Plan
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Active Users
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Active requests
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Brand Voice
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsTable;
