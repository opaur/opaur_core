"use client";
import HeaderComp from "@/components/Headerc/index";
import Footer from "@/components/Footer/index";
import Image from "next/image";

const LandingPage = () => {
  return (

    <div className="flex min-h-screen flex-col">
      <HeaderComp/>
      <section className="py-18 md:py-26 lg:py-32">
  <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
          Unlock Your Business Potential..
        </h1>
        <p className="mb-8 text-lg md:text-xl lg:text-2xl">
          Our all-in-one platform helps you streamline your operations and
          drive growth.
        </p>
        <a
            href="/private"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
          >
            Start Now
            <span className="ml-1 text-lg">&#8594;</span>
          </a>
      </div>
      <Image
              width={450}
              height={300}
              src={"/images/illustration/composition-5.svg"}
              alt="Logo"
              priority
            />
    </div>
  </div>
</section>

      <section className="py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-black dark:text-white text-3xl font-bold md:text-4xl lg:text-5xl">
            Features That Matter
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Blazing Fast",
                description:
                  "Our platform is optimized for lightning-fast performance, ensuring your customers have a seamless experience.",
              },
              {
                title: "Secure & Reliable",
                description:
                  "Your data is safe with us. We employ the latest security measures to protect your business.",
              },
              {
                title: "Highly Customizable",
                description:
                  "Tailor our platform to your unique business needs and preferences.",
              },
              {
                title: "Enterprise-Grade",
                description:
                  "Our platform is trusted by leading businesses and enterprises worldwide.",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Gain deep insights into your business performance with our powerful analytics tools.",
              },
              {
                title: "Effortless Automation",
                description:
                  "Streamline your workflows and eliminate manual tasks with our powerful automation tools.",
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-white dark:border-strokedark dark:bg-boxdark p-6 shadow-md">
                <div className="mb-2 inline-block rounded-md p-3"> <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
              fill=""
            />
          </svg></div>
                <h3 className="text-black dark:text-white mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="">{feature.description}</p>
              </div>
            ))}
            
          </div>
          <Image
              width={1450}
              height={300}
              src={"/images/illustration/composition-line.svg"}
              alt="Logo"
              priority
            />
         
        </div>
        
      </section>

      <section className="bg-gray-100 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-gray-800 mb-12  text-black dark:text-white text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Starter",
                description: "Perfect for small businesses and startups.",
                price: "$19",
              },
              {
                title: "Pro",
                description: "Ideal for growing businesses and teams.",
                price: "$49",
              },
              {
                title: "Enterprise",
                description: "Tailored for large organizations with custom needs.",
                price: "$99",
              },
            ].map((plan, index) => (
              <div key={index} className="rounded-lg bg-white dark:border-strokedark dark:bg-boxdark p-6 shadow-md">
                <h3 className="text-black dark:text-white mb-2 text-2xl font-bold">
                  {plan.title}
                </h3>
                <p className=" mb-6">{plan.description}</p>
                <div className="mb-4 flex items-baseline">
                  <span className="text-black dark:text-white text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-black dark:text-white">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-black dark:text-white text-3xl font-bold md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                quote:
                  "This platform has been a game-changer for our business. The features are top-notch, and the support team is incredible.",
                name: "John Doe",
                title: "CEO, Acme Inc.",
              },
              {
                quote:
                  "I was hesitant at first, but this platform has exceeded all my expectations. It's user-friendly and packed with powerful features.",
                name: "Jane Appleseed",
                title: "Founder, Startup Ventures",
              },
              {
                quote:
                  "This platform has streamlined our operations and significantly improved our efficiency. Highly recommended!",
                name: "Sarah Musk",
                title: "CTO, Tech Innovations",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white dark:border-strokedark dark:bg-boxdark p-6 shadow-md">
                <blockquote>
                  <p className=" mb-4">&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h4 className="text-black dark:text-white text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
