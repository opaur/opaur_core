import { BRAND } from "@/types/brand";
import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";

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

const TableFour: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-xs border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Top Channels
            </h4>
          </div>
          <DropdownDefault />
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-xs bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Source
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Visitors
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Revenues
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Conversion
              </h5>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="h-9 w-full max-w-9 shrink-0">
                  <Image src={brand.logo} width={60} height={50} alt="Brand" />
                </div>
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {brand.visitors}K
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-meta-3">${brand.revenues}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-meta-5">{brand.conversion}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableFour;
