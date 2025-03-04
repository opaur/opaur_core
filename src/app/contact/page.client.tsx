"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
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
      <main className="grow mx-auto w-full max-w-(--breakpoint-lg) p-6 md:p-10">
        <div className="mx-auto max-w-(--breakpoint-xl) px-10 py-10 rounded-xs border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-hidden focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-hidden focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                  className="w-full rounded-lg border truncate border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-hidden focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-hidden focus:border-primary dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-5">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition font-medium text-gray hover:bg-opacity-90 dark:hover:bg-opacity-80"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};


