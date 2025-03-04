"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import { type User } from "@supabase/auth-helpers-nextjs";

export default function PrivacyPolicy({ user }: { user: User | null }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="grow mx-auto w-full max-w-(--breakpoint-lg) p-6 md:p-10">
      <section className="bg-gray-100 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-gray-800 mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
            Pricing
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Free",
                description: "Get started with AI-powered calls at no cost.",
                price: "$0",
                features: [
                  "1,000 call tokens",
                  "Basic call scripts",
                  "Basic call transcription",
                  "Standard AI voice",
                ],
              },
              {
                title: "Pro",
                description:
                  "Scale your business with custom AI voices and automation.",
                price: "$49",
                features: [
                  "30,000 call tokens per month",
                  "Custom AI voices & tone settings",
                  "Advanced call transcription & summaries",
                  "CRM & calendar integrations",
                  "Priority email support",
                ],
              },
              {
                title: "Business",
                description:
                  "Fully trainable AI agents that match your brand’s voice.",
                price: "$99",
                features: [
                  "80,000 call tokens per month",
                  "Train AI to mimic your sales team’s voice",
                  "Real-time call analytics & insights",
                  "API access & custom workflows",
                  "Dedicated account manager",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow-md  dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                    {plan.title}
                  </h3>
                  <p className="mb-6">{plan.description}</p>
                  <div className="mb-4 flex items-baseline">
                    <span className="text-4xl font-bold text-black dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-black dark:text-white">/month</span>
                  </div>
                  <ul className="mb-6 space-y-2 text-black dark:text-white">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() =>
                    alert(
                      "Due to high demand, subscriptions are paused. Please join the waitlist!",
                    )
                  }
                  className="mt-auto inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                  <span className="ml-2 text-lg">&#8594;</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};
