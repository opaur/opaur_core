import Link from "next/link";

const BrandForm = () => {
 return(

  <div className="flex min-h-screen flex-col">
  <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
    <div className="mx-auto max-w-screen-xl px-10 py-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Create Your Brand:
      </h2>
      <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
        Lets build the foundation of your brand — from logo to voice.
      </p>

      <form className="space-y-6">
        {/* Brand Name Field */}
        <div>
          <label className="block font-medium text-black dark:text-white mb-2.5">
            Brand Name:
          </label>
          <div className="relative">
            <input
              type="text"
              name="brand_name"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Enter your brand name"
              required
            />
          </div>
        </div>

        {/* Brand Description Field */}
        <div>
          <label className="block font-medium text-black dark:text-white mb-2.5">
            Brand Description:
          </label>
          <div className="relative">
            <textarea
              name="brand_description"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Describe your brand's mission, values, and vision."
              required
            ></textarea>
          </div>
        </div>

        {/* Brand Voice Field */}
        <div>
          <label className="block font-medium text-black dark:text-white mb-2.5">
            Brand Voice:
          </label>
          <div className="relative">
            <input
              type="text"
              name="brand_voice"
              className="w-full rounded-lg border truncate border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="How do you want your brand to speak?"
              required
            />
          </div>
        </div>

        {/* Tagline Field */}
        <div>
          <label className="block font-medium text-black dark:text-white mb-2.5">
            Brand Tagline:
          </label>
          <div className="relative">
            <input
              type="text"
              name="brand_tagline"
              className="w-full rounded-lg border truncate border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Create a catchy and memorable tagline."
              required
            />
          </div>
        </div>

        {/* Color Scheme Field */}
        <div>
          <label className="block font-medium text-black dark:text-white mb-2.5">
            Industry:
          </label>
          <div className="relative">
            <input
              type="text"
              name="color_scheme"
              className="w-full rounded-lg border truncate border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Enter the industry you are."
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-5">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 dark:hover:bg-opacity-80"
          >
            CREATE BRAND
          </button>
        </div>
      </form>
    </div>
  </main>
</div>
 );};
export default BrandForm;
