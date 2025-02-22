"use client";
import React, { useState } from "react";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Image from "next/image";
import { type User } from "@supabase/auth-helpers-nextjs";

const LandingPage = ({ user }: { user: User | null }) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getIPAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Failed to fetch IP address:", error);
      return null;
    }
  };

  const getBrowserMetadata = async () => {
    const ip = await getIPAddress();
    return {
      ip,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };


  const sendMetadata = async () => {
    setLoading(true);
    try {
      const metadata = await getBrowserMetadata();
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, metadata }),
      });

      const result = await response.json();
      setLoading(false);

      if (!response.ok) {
        console.error("Error:", result.error || "Failed to send metadata");
        alert("Failed to save your email. Please try again.");
        return;
      }

      alert("Thank you for signing up!");
    } catch (error) {
      setLoading(false);
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />

      <section className="py-18 md:py-26 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
    AI Agents That Speak Your Brand Language  
</h1>
<p className="mb-8 py-3 text-xl md:text-xl lg:text-xl">
    Never miss an opportunity again. Our AI-powered agents handle outreach, schedule demos, confirm attendance, and follow up—just like your sales team would. Same tone, same professionalism, but fully automated.  
    <strong className="text-black dark:text-white"> Join the waitlist</strong> to be among the first to experience AI-driven conversations that feel human.  
</p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        className="border-gray-300 text-gray-800 placeholder-gray-500 w-full max-w-md rounded-md border px-4 py-3 text-sm transition duration-200 ease-in-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        onClick={sendMetadata}
        disabled={loading}
        className={`inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white whitespace-nowrap hover:bg-opacity-90 lg:px-8 xl:px-10 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Submitting..." : "Join the Waitlist"}
        <span className="ml-2 text-lg">&#8594;</span>
      </button>
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
            Automate Conversations, Accelerate Growth
        </h2>
        <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            Our AI agents do not just make calls—they speak your brand language. With{" "}
            <strong className="text-black dark:text-white">consistent tone</strong> and{" "}
            <strong className="text-black dark:text-white">seamless automation</strong>, they engage leads, confirm appointments, and follow up effortlessly. 
            Free your team from repetitive calls and focus on closing deals.  
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
                {
                    title: "Consistent Brand Voice",
                    description:
                        "AI agents sound just like your sales team, ensuring a seamless experience.",
                },
                {
                    title: "Automated Lead Engagement",
                    description:
                        "Effortlessly schedule demos, confirm attendance, and follow up on autopilot.",
                },
                {
                    title: "24/7 Availability",
                    description:
                        "Never miss an opportunity—our AI agents work around the clock.",
                },
                {
                    title: "Scalable & Customizable",
                    description:
                        "Tailor AI conversations to your business needs, from small teams to enterprises.",
                },
                {
                    title: "Secure & Reliable",
                    description:
                        "Your data is encrypted and protected for seamless, worry-free automation.",
                },
                {
                    title: "Instant Insights & Analytics",
                    description:
                        "Track performance, optimize calls, and improve conversion rates effortlessly.",
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
                        "5,000 call tokens per month",
                        "Basic call scripts",
                        "Basic call transcription",
                        "Standard AI voice"
                    ],
                },
                {
                    title: "Pro",
                    description: "Scale your business with custom AI voices and automation.",
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
                    description: "Fully trainable AI agents that match your brand’s voice.",
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
                    className="flex flex-col justify-between h-full transform rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 dark:border-strokedark dark:bg-boxdark"
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
                        onClick={() => alert("Due to high demand, subscriptions are paused. Please join the waitlist!")}
                        className="mt-auto inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white whitespace-nowrap hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Get Started
                        <span className="ml-2 text-lg">&#8594;</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
</section>



      <section className="py-20 md:py-32 lg:py-40">
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
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
