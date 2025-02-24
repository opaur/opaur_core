import React from 'react';
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import { type User } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const CareersClient = ({ user }: { user: User | null }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const positions = [
    {
      id: "tech-lead",
      title: "Tech Lead",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Engineering"
    },
    {
      id: "senior-dev",
      title: "Senior Developer",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Development"
    },
    {
      id: "business-dev",
      title: "Business Development Manager",
      location: "Bogotá, Colombia",
      type: "Full-time",
      department: "Business"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Join Our Growth in Colombia
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Be part of the tech revolution in Latin America
          </p>
        </div>

        {/* About Us Section */}
        <div className="mx-auto max-w-screen-xl px-8 py-8 mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Investment Opportunity
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We're a growing technology company based in Bogotá, Colombia, seeking strategic investors to join our mission of revolutionizing software development in Latin America. Our location in one of South America's leading tech hubs positions us perfectly for regional expansion.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Why invest with us:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
            <li className="mb-2">Strategic location in Bogotá's thriving tech ecosystem</li>
            <li className="mb-2">Access to top Latin American talent</li>
            <li className="mb-2">Growing market with significant expansion potential</li>
            <li className="mb-2">Strong existing partnerships in the region</li>
          </ul>
        </div>

        {/* Open Positions */}
        <div className="mx-auto max-w-screen-xl px-8 py-8 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Current Opportunities
          </h2>

          {/* Role Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className={`cursor-pointer rounded-lg border p-6 transition-all duration-300 ${
                  selectedRole === position.id
                    ? "border-primary bg-primary bg-opacity-10"
                    : "border-gray-300 hover:border-primary dark:border-strokedark"
                }`}
                onClick={() => setSelectedRole(position.id)}
              >
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {position.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {position.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {position.department}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black dark:text-white mb-2">Role</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join our team in Bogotá as we build the next generation of developer tools. We're looking for passionate individuals who want to make an impact in the Latin American tech scene while working on cutting-edge projects.
                  </p>
                </div>

                <button className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Investment Contact */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in investing or learning more about our opportunities? Contact us at:
            </p>
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-mono">
              info@opaur.com
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              What to include in your message:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li className="mb-2">Investment interests and background</li>
              <li className="mb-2">Preferred investment range</li>
              <li className="mb-2">Previous experience in tech investments (if any)</li>
              <li className="mb-2">Preferred method of contact for follow-up</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersClient;