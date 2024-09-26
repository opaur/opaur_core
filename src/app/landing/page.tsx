"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Image from "next/image";
import {
  type User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

const LandingPage = ({ user }: { user: User | null }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />

      <section className="py-18 md:py-26 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
                Revolutionize your brand with speed and precision
              </h1>
              <p className="mb-8 py-3 text-lg md:text-xl lg:text-2xl">
                Join our growing family of brands that trust Opaur to bring life
                to their identity, enhance their presence, and elevate their
                vision.
                <strong className="text-white"> Together</strong>, we will turn
                your ideas into reality.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-300 text-gray-800 placeholder-gray-500 h-12 w-full max-w-xs rounded-md border px-4 py-3 text-sm transition duration-200 ease-in-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-1 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
                >
                  Start Now
                  <span className="ml-2 text-lg">&#8594;</span>
                </a>
              </div>
            </div>
            <Image
              width={450}
              height={300}
              src={"/images/illustration/composition-6.svg"}
              alt="Logo"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
            Break Free from Delays and Complications in Your Branding Journey
          </h2>
          <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            We merge cutting-edge software with{" "}
            <strong className="text-white">human creativity</strong> to craft
            fast, personalized branding strategies. Our mission is simple: to
            transform how brands <strong className="text-white">connect</strong>{" "}
            with their audience by offering innovative{" "}
            <strong className="text-white">solutions</strong> that inspire
            growth and foster engagement.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Streamlined Workflow",
                description:
                  "Experience a seamless process from brief to final assets.",
              },
              {
                title: "Enterprise-Grade",
                description:
                  "Get a brand that's uniquely yours, crafted with precision.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Benefit from our team of branding experts every step of the way.",
              },
              {
                title: "Secure & Reliable",
                description:
                  "We prioritize your brand's integrity. We ensure that your information remains confidential and protected at all times.",
              },
              {
                title: "Insightful Analytics",
                description:
                  "Gain a deeper understanding of your brand's voice with our tone analytics tools, empowering you to choose the perfect tone for your creations and branding strategies.",
              },
              {
                title: "Effortless Automation",
                description:
                  "Enhance efficiency by automating workflows and reducing manual tasks, so you can focus on growing your brand.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="transform rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 dark:border-strokedark dark:bg-boxdark"
              >
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
            Join the Opaur Revolution
          </h2>

          <p className="mb-8 text-center  text-lg md:text-xl lg:text-2xl">
            Join a community that&lsquos redefining branding. Subscribe to our
            newsletter for exclusive insights, tips, and updates that will
            elevate your brand. 
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-gray-300 text-gray-800 placeholder-gray-500 w-full max-w-md rounded-md border px-4 py-3 text-sm transition duration-200 ease-in-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
            >
              Join for Free
              <span className="ml-2 text-lg">&#8594;</span>
            </a>
          </div>
        </div>
      </section>
      {/* 
      <section className="bg-gray-100 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-gray-800 mb-12  text-center text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
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
                description:
                  "Tailored for large organizations with custom needs.",
                price: "$99",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="transform rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 dark:border-strokedark dark:bg-boxdark"
              >
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {plan.title}
                </h3>
                <p className=" mb-6">{plan.description}</p>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold text-black dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-black dark:text-white">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
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
              <div
                key={index}
                className="transform rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 dark:border-strokedark dark:bg-boxdark"
              >
                <blockquote>
                  <p className=" mb-4">&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
