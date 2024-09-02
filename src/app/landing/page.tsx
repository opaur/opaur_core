import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Calendar | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calendar page for TailAdmin Tailwind CSS Admin Dashboard Template",
};

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-blue-600 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Unlock Your Business Potential
          </h1>
          <p className="mb-8 text-lg text-white md:text-xl lg:text-2xl">
            Our all-in-one platform helps you streamline your operations and
            drive growth.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
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
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 inline-block rounded-md bg-blue-100 p-3"></div>
                <h3 className="text-gray-800 mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-gray-800 mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
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
                description: "Tailored for large organizations.",
                price: "$99",
              },
            ].map((plan, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-gray-800 mb-2 text-2xl font-bold">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4 flex items-baseline">
                  <span className="text-gray-800 text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
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
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <blockquote>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h4 className="text-gray-800 text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
