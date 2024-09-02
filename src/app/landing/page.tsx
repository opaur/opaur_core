"use client";
import { Metadata } from "next";
import Header from "@/components/Header";

const [sidebarOpen, setSidebarOpen] = false;

const LandingPage = () => {
  
  return (
    <>
    <Header sidebarOpen={false} />
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-600 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Unlock Your Business Potential
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Our all-in-one platform helps you streamline your operations and drive growth.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Features That Matter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Blazing Fast", description: "Our platform is optimized for lightning-fast performance, ensuring your customers have a seamless experience." },
              { title: "Secure & Reliable", description: "Your data is safe with us. We employ the latest security measures to protect your business." },
              { title: "Highly Customizable", description: "Tailor our platform to your unique business needs and preferences." },
              { title: "Enterprise-Grade", description: "Our platform is trusted by leading businesses and enterprises worldwide." },
              { title: "Advanced Analytics", description: "Gain deep insights into your business performance with our powerful analytics tools." },
              { title: "Effortless Automation", description: "Streamline your workflows and eliminate manual tasks with our powerful automation tools." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-md mb-4 inline-block"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Starter", description: "Perfect for small businesses and startups.", price: "$19" },
              { title: "Pro", description: "Ideal for growing businesses and teams.", price: "$49" },
              { title: "Enterprise", description: "Tailored for large organizations.", price: "$99" },
            ].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { quote: "This platform has been a game-changer for our business. The features are top-notch, and the support team is incredible.", name: "John Doe", title: "CEO, Acme Inc." },
              { quote: "I was hesitant at first, but this platform has exceeded all my expectations. It's user-friendly and packed with powerful features.", name: "Jane Appleseed", title: "Founder, Startup Ventures" },
              { quote: "This platform has streamlined our operations and significantly improved our efficiency. Highly recommended!", name: "Sarah Musk", title: "CTO, Tech Innovations" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <blockquote>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LandingPage;