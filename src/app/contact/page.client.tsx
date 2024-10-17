"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import useColorMode from "@/hooks/useColorMode"; // Color mode hook
import { useState } from "react"; // Import useState to handle selected topic
import { type User } from "@supabase/auth-helpers-nextjs";

export default function ContactUsClient ({ user }: { user: User | null }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null); // State for selected topic

  const topics = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Support" },
    { value: "feedback", label: "Feedback" },
    { value: "partnership", label: "Partnership" },
    { value: "billing", label: "Billing Questions" },
    { value: "technical", label: "Technical Support" },
    { value: "features", label: "Feature Requests" },
    { value: "complaints", label: "Complaints" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
        <div className="mx-auto max-w-screen-xl px-10 py-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Contact Us:
          </h2>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            Questions, bug reports, feedback — we are here for it all.
          </p>

          {/* Topic Field as Non-Selectable Cards */}
          <div className="mb-6">
            <label className="block font-medium text-black dark:text-white mb-2.5">
              Topic:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.value}
                  className={`cursor-pointer rounded-lg border p-4 text-center transition-all duration-300 ${
                    selectedTopic === topic.value
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-gray-100 text-black hover:bg-opacity-50 dark:border-strokedark dark:bg-gray-700 dark:text-white dark:hover:bg-opacity-50"
                  }`}
                  onClick={() => setSelectedTopic(topic.value)} // Set selected topic on click
                >
                  {topic.label}
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block font-medium text-black dark:text-white mb-2.5">
                Your Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-medium text-black dark:text-white mb-2.5">
                Your Email:
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block font-medium text-black dark:text-white mb-2.5">
                Subject:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="What would you like to talk about?"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-medium text-black dark:text-white mb-2.5">
                Your Message:
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-5">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 dark:hover:bg-opacity-80"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>

       

          <div className="mt-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Discover more.
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              From branding to marketing, learn how Opaur works from top to
              bottom.
            </p>
            <Link
              href="/guides"
              className="flex items-center justify-center w-full gap-3.5 rounded-lg border border-gray-300 bg-gray-100 p-4 transition-all duration-300 hover:bg-opacity-50 dark:border-strokedark dark:bg-gray-700"
            >
              Explore guides
            </Link>
            <div className="mt-6 text-center">
  <Link
    href="/privacy-policy"
    className="inline-block px-4 py-2 text-primary bg-gray-100 rounded-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:border-strokedark dark:text-white dark:hover:bg-gray-600"
  >
    Privacy Policy
  </Link>
</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


