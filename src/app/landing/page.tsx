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
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    quote: "quote1",
    name: "John Carter",
    title: "OP Manager, Swift Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "quote2",
    name: "Samantha Lee",
    title: "Founder, Bloom Marketing",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "quote3",
    name: "Carlos Mendoza",
    title: "Support Lead, NexaTech",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "quote4",
    name: "Jessica Tan",
    title: "Support Manager, Urban Connect",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "quote5",
    name: "Mike Rodriguez",
    title: "Clinic Owner, Wellness First",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    quote: "quote6",
    name: "Emma Brooks",
    title: "Sales Manager, LeadPro",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const LandingPage = ({ user }: { user: User | null }) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { t, i18n } = useTranslation("global");

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
              <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl dark:text-white">
                {t("header.title")}
              </h1>
              <p className="mb-8 py-3 text-xl md:text-xl lg:text-xl">
                {t("header.description")}
                <strong className="text-black dark:text-white">
                  {" "}
                  {t("header.textWaitlist")}
                </strong>{" "}
                {t("header.description2")}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder={t("header.inputEmail")}
                  value={email}
                  onChange={handleInputChange}
                  className="border-stroke focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-full rounded-md border-2 bg-transparent py-2 pr-10 pl-6 text-black outline-hidden focus-visible:shadow-none dark:text-white"
                />
                <button
                  onClick={sendMetadata}
                  disabled={loading}
                  className={`bg-primary hover:bg-opacity-90 inline-flex cursor-pointer items-center justify-center rounded-md px-6 py-2 text-center text-sm font-medium whitespace-nowrap text-white lg:px-8 xl:px-10 ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {loading ? "Submitting..." : t("header.textWaitlist")}
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
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
            {t("Growth.title")}
          </h2>
          <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            {t("Growth.description")}{" "}
            <strong className="text-black dark:text-white">
              {t("Growth.text1")}
            </strong>{" "}
            {t("Growth.text2")}{" "}
            <strong className="text-black dark:text-white">
              {t("Growth.text3")}
            </strong>
            , {t("Growth.description2")}
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: t("Growth.cardTitle1"),
                description: t("Growth.cardDescription1"),
              },
              {
                title: t("Growth.cardTitle2"),
                description: t("Growth.cardDescription2"),
              },
              {
                title: t("Growth.cardTitle3"),
                description: t("Growth.cardDescription3"),
              },
              {
                title: t("Growth.cardTitle4"),
                description: t("Growth.cardDescription4"),
              },
              {
                title: t("Growth.cardTitle5"),
                description: t("Growth.cardDescription5"),
              },
              {
                title: t("Growth.cardTitle6"),
                description: t("Growth.cardDescription6"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="dark:border-strokedark dark:bg-boxdark rounded-lg bg-white p-6 shadow-md"
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
      <section className="relative bg-gray-100 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl dark:text-white">
            {t("Technologies.title")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("Technologies.subtitle")}
          </p>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-y-6">
          {/* Top Row - Most Important */}
          <div className="flex items-center justify-center gap-x-6">
            <Image
              src="/images/logo/openai_logo.svg"
              alt="OpenAI"
              width={100} // Ajusta según tamaño real
              height={48} // Ajusta según tamaño real
              className="h-12 w-auto object-contain p-2 opacity-80 grayscale filter md:h-16 dark:brightness-90 dark:invert"
            />
            <Image
              src="/images/logo/twilio-logo.svg"
              alt="Twilio"
              width={100} // Ajusta según tamaño real
              height={48} // Ajusta según tamaño real
              className="h-12 w-auto scale-[1.1] object-contain p-2 opacity-80 grayscale filter md:h-16 dark:brightness-90 dark:invert"
            />
          </div>

          {/* Bottom Row - Secondary */}
          <div className="flex items-center justify-center gap-x-6">
            <Image
              src="/images/logo/claude_logo.svg"
              alt="Claude AI"
              width={100} // Ajusta según tamaño real
              height={48} // Ajusta según tamaño real
              className="h-12 w-auto scale-[1.05] object-contain p-2 opacity-80 grayscale filter md:h-16 dark:brightness-90 dark:invert"
            />
            <Image
              src="/images/logo/elevenLabs_logo.png"
              alt="ElevenLabs"
              width={100} // Ajusta según tamaño real
              height={40} // Ajusta según tamaño real
              className="h-10 w-auto scale-[0.9] object-contain p-2 opacity-80 grayscale filter md:h-14 dark:brightness-90 dark:invert"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-15 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black text-gray-800 md:text-4xl lg:text-5xl dark:text-white">
            {t("Pricing.title")}
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: t("Pricing.cardPlan1"),
                description: t("Pricing.cardSubtitle1"),
                price: "$0",
                features: [
                  t("Pricing.feacture1.text1"),
                  t("Pricing.feacture1.text2"),
                  t("Pricing.feacture1.text3"),
                  t("Pricing.feacture1.text4"),
                ],
              },
              {
                title: t("Pricing.cardPlan2"),
                description: t("Pricing.cardSubtitle2"),
                price: "$49",
                features: [
                  t("Pricing.feacture2.text1"),
                  t("Pricing.feacture2.text2"),
                  t("Pricing.feacture2.text3"),
                  t("Pricing.feacture2.text4"),
                  t("Pricing.feacture2.text5"),
                ],
              },
              {
                title: t("Pricing.cardPlan3"),
                description: t("Pricing.cardSubtitle3"),
                price: "$99",
                features: [
                  t("Pricing.feacture3.text1"),
                  t("Pricing.feacture3.text2"),
                  t("Pricing.feacture3.text3"),
                  t("Pricing.feacture3.text4"),
                  t("Pricing.feacture3.text5"),
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="dark:border-strokedark dark:bg-boxdark flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow-md"
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
                  className="bg-primary hover:bg-opacity-90 mt-auto inline-flex items-center justify-center rounded-md px-6 py-2 text-center text-sm font-medium whitespace-nowrap text-white lg:px-8 xl:px-10"
                >
                  {t("Pricing.textButton")}
                  <span className="ml-2 text-lg">&#8594;</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-5 bg-gray-100 py-20 md:py-32 lg:py-40 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="mb-10 text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white">
            {t("Customers.title")}
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
                <div className="dark:border-strokedark dark:bg-boxdark relative flex h-60 flex-col justify-between overflow-hidden rounded-lg bg-white p-4 md:h-64 lg:h-72">
                  <blockquote className="flex-1 text-gray-700 dark:text-gray-300">
                    <p className="lg:text-l text-base leading-relaxed md:text-lg">
                      &quot;{t(`Customers.${testimonial.quote}`)}&quot;
                    </p>
                  </blockquote>
                  <div className="mt-2 flex items-center">
                  <Image
  src={testimonial.image}
  alt={testimonial.name}
  width={40} // Ajusta según el tamaño real
  height={40} // Ajusta según el tamaño real
  className="h-10 w-10 rounded-full"
/>
                    <div className="ml-3 text-left">
                      <h4 className="text-base font-semibold text-black md:text-lg dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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
