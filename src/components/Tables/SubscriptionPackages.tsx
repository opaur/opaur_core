import { Package } from "@/types/package";

const packageData: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Pending",
  }, {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Pending",
  }, {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Pending",
  },
];

const SubscriptionPackages = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packageData.map((pkg, index) => (
        <div
          key={index}
          className="rounded-lg border border-stroke bg-white p-6 shadow-lg dark:border-strokedark dark:bg-boxdark"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            {pkg.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Price: <span className="font-bold">${pkg.price.toFixed(2)}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Invoice Date: {pkg.invoiceDate}
          </p>
          <p
            className={`inline-block rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
              pkg.status === "Paid"
                ? "bg-success text-success"
                : pkg.status === "Unpaid"
                ? "bg-danger text-danger"
                : "bg-warning text-warning"
            }`}
          >
            {pkg.status}
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="text-gray-500 hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                  fill="currentColor"
                />
                <path
                  d="M12 8a1 1 0 110-2 1 1 0 010 2zm-1 4h2v4h-2v-4z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 7V6a2 2 0 012-2h12a2 2 0 012 2v1m-1 4H5a1 1 0 00-1 1v4a2 2 0 002 2h10a2 2 0 002-2v-4a1 1 0 00-1-1z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPackages;
