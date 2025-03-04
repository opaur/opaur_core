"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import useColorMode from "@/hooks/useColorMode"; // Color mode hook
import { type User } from "@supabase/auth-helpers-nextjs";

const CareersClient = ({ user }: { user: User | null }) => {

  const positions = [
    {
      id: "growth-hacker",
      title: "Growth Hacker",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Marketing & Growth",
      description:
        "Develop and execute data-driven strategies to drive user acquisition, engagement, and retention. Experiment with creative marketing tactics, optimize conversion funnels, and leverage analytics to scale growth. If you thrive on innovation, rapid testing, and finding unconventional ways to drive results, we’d love to have you on board!",
    },
    {
      id: "senior-dev",
      title: "Senior Developer",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Development",
      description:
        "Build and optimize modern web applications using our tech stack: Next.js, React, Tailwind CSS, Supabase, and PostgreSQL. Work on performance optimizations, API integrations, and scalable architectures. Collaborate with cross-functional teams to deliver high-quality software. If you’re passionate about clean code, best practices, and innovation, join us!",
    },
    {
      id: "business-dev",
      title: "Business Development Manager",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Business",
      description:
        "Drive strategic partnerships and revenue growth by identifying new business opportunities. Build and nurture relationships with key stakeholders, develop market strategies, and collaborate with internal teams to drive success. If you're a proactive, results-driven professional with a passion for scaling businesses, let's connect!",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="mx-auto w-full max-w-(--breakpoint-lg) grow p-6 md:p-10">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
            Join Our Growth in Colombia
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Be part of the tech revolution in Latin America
          </p>
        </div>

        {/* About Us Section */}
        <div className="mx-auto mb-10 max-w-(--breakpoint-xl) rounded-xs border border-stroke bg-white px-8 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
            Invest in the Next Global Tech Powerhouse
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We are a fast-growing technology company redefining software
            solutions from Latin America to the world. Headquartered in
            Bogotá—one of South Americas most vibrant tech hubs—we are
            strategically positioned to scale across international markets. We
            are seeking forward-thinking investors to accelerate our expansion
            and seize global opportunities.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Why invest with us:
          </p>
          <ul className="text-gray-600 dark:text-gray-300 mb-6 list-disc pl-6">
            <li className="mb-2">
              Strategic presence in Latin America’s growing tech ecosystem
            </li>
            <li className="mb-2">
              Access to world-class talent with global scalability
            </li>
            <li className="mb-2">
              Proven market traction and high growth potential
            </li>
            <li className="mb-2">
              Strong partnerships enabling rapid international expansion
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            Be part of a company with the vision, talent, and momentum to scale
            globally. Lets build the future of technology—together.
          </p>

          <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Interested in investing? 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
          Contact us at:
          </p>
          <div className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-mono inline-block rounded-lg px-4 py-2">
            info@opaur.com
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            What to include in your message:
          </p>
          <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc pl-6">
            <li className="mb-2">Investment interests and background</li>
            <li className="mb-2">Preferred investment range</li>
            <li className="mb-2">Preferred method of contact for follow-up</li>
          </ul>
        </div>
        </div>

       

        {/* Open Positions */}
        <div className="mx-auto max-w-(--breakpoint-xl) rounded-xs border border-stroke bg-white px-8 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
            Current Opportunities
          </h2>

          {/* Role Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6">
            {positions.map((position) => (
              <div
                key={position.id}
                className={`cursor-pointer rounded-lg border p-6 transition-all duration-300`}
              >
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {position.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className=" bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full py-1 text-sm">
                    🇨🇴{position.location}
                  </span>
                  <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm">
                    {position.type}
                  </span>
                  <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm">
                    {position.department}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-semibold text-black dark:text-white">
                    Role
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {position.description}{" "}
                  </p>
                </div>

                <button className="inline-flex items-center rounded-lg border border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Investment Contact */}
          <div className="mt-10">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Join Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We are looking for talented individuals to be part of our growing
              team. If you are passionate about technology and innovation, we will
              love to hear from you.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Send us your application at:
            </p>
            <div className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-mono inline-block rounded-lg px-4 py-2">
              info@opaur.com
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              What to include in your message:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc pl-6">
              <li className="mb-2">Your CV or resume (PDF preferred) or website for the mosth enthusiast</li>
              <li className="mb-2">A brief introduction about yourself</li>
              <li className="mb-2">
                Your expertise and professional background
              </li>
              <li className="mb-2">Preferred role or department</li>
              <li className="mb-2">
                Links to your portfolio or relevant work (if applicable)
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersClient;
