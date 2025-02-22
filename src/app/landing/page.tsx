"use client";
import React, { useState } from "react";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Image from "next/image";
import { type User } from "@supabase/auth-helpers-nextjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    quote:
      "I was skeptical at first, but this platform has completely changed the way we handle customer calls. The call transcription feature alone saves us hours every week!",
    name: "John Carter",
    title: "OP Manager, Swift Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The ability to customize call scripts has made a huge difference for our team. It feels like we've hired an extra assistant, but without the overhead!",
    name: "Samantha Lee",
    title: "Founder, Bloom Marketing",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "We used to struggle with handling high call volumes, but now our customers get quick, clear responses—without tying up our agents. Total game-changer!",
    name: "Carlos Mendoza",
    title: "Support Lead, NexaTech",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "At first, I thought AI-generated voices would sound robotic, but I was blown away. The custom voice option lets us match our brand perfectly.",
    name: "Jessica Tan",
    title: "Support Manager, Urban Connect",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "We needed a scalable way to handle appointment reminders, and this platform delivered.",
    name: "Mike Rodriguez",
    title: "Clinic Owner, Wellness First",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    quote:
      "The AI-generated summaries help us quickly review calls without listening to full recordings. Our team is so much more efficient now!",
    name: "Emma Brooks",
    title: "Sales Manager, LeadPro",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

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
                Never miss an opportunity again. Our AI-powered agents handle
                outreach, schedule demos, confirm attendance, and follow up—just
                like your sales team would. Same tone, same professionalism, but
                fully automated.
                <strong className="text-black dark:text-white">
                  {" "}
                  Join the waitlist
                </strong>{" "}
                to be among the first to experience AI-driven conversations that
                feel human.
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
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ${
                    loading ? "cursor-not-allowed opacity-50" : ""
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
            Our AI agents do not just make calls—they speak your brand language.
            With{" "}
            <strong className="text-black dark:text-white">
              consistent tone
            </strong>{" "}
            and{" "}
            <strong className="text-black dark:text-white">
              seamless automation
            </strong>
            , they engage leads, confirm appointments, and follow up
            effortlessly. Free your team from repetitive calls and focus on
            closing deals.
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
                className=" rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark"
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
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto text-center px-4 md:px-6">
    <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
      Powered by Cutting-Edge AI & Voice Technologies
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      We leverage the most advanced AI and voice solutions to deliver natural, intelligent conversations.
    </p>
  </div>

  <div className="relative mt-10 flex flex-col items-center gap-y-6">
    {/* Top Row - Most Important */}
    <div className="flex justify-center gap-x-12 items-center">
      <img src="/images/logo/openai_logo.svg" alt="OpenAI" className="h-12 md:h-16 w-auto p-2 object-contain filter grayscale dark:invert dark:brightness-90 opacity-80" />
      <img src="/images/logo/twilio-logo.svg" alt="Twilio" className="h-12 md:h-16 w-auto p-2 object-contain filter grayscale dark:invert dark:brightness-90 opacity-80 scale-[1.1]" />
    </div>

    {/* Bottom Row - Secondary */}
    <div className="flex justify-center gap-x-12 items-center">
      <img src="/images/logo/claude_logo.svg" alt="Claude AI" className="h-12 md:h-16 w-auto p-2 object-contain filter grayscale dark:invert dark:brightness-90 opacity-80 scale-[1.05]" />
      <img src="/images/logo/elevenLabs_logo.png" alt="ElevenLabs" className="h-10 md:h-14 w-auto p-2 object-contain filter grayscale dark:invert dark:brightness-90 opacity-80 scale-[0.9]" />
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

      <section className="bg-gray-100 dark:bg-gray-900 py-20 md:py-32 mb-5lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-15"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex h-60 flex-col justify-between overflow-hidden rounded-lg bg-white p-4  dark:border-strokedark dark:bg-boxdark md:h-64 lg:h-72">
                  <blockquote className="text-gray-700 dark:text-gray-300 flex-1">
                    <p className="lg:text-l text-base leading-relaxed md:text-lg">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </blockquote>
                  <div className="mt-2 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3 text-left">
                      <h4 className="text-base font-semibold text-black dark:text-white md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
