'use client';
import Link from "next/link"
export function Landingpage() {
  return (
    (<div className="flex flex-col min-h-[100dvh] ">
      <section className="bg-primary dark:bg-muted py-20 md:py-32 lg:py-40 ">
        <div className="container mx-auto px-4 md:px-6 text-center ">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground dark:text-primary mb-4 ">
            Unlock Your Business Potential
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground mb-8 dark:text-primary">
            Our all-in-one platform helps you streamline your operations and drive growth.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground dark:bg-primary dark:text-primary-foreground  text-primary font-medium rounded-md hover:bg-primary-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
            prefetch={false}>
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Features That Matter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <GaugeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Blazing Fast</h3>
              <p className="text-muted-foreground">
                Our platform is optimized for lightning-fast performance, ensuring your customers have a seamless
                experience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <ShieldIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Secure &amp; Reliable</h3>
              <p className="text-muted-foreground">
                Your data is safe with us. We employ the latest security measures to protect your business.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <SettingsIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Highly Customizable</h3>
              <p className="text-muted-foreground">
                Tailor our platform to your unique business needs and preferences.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Enterprise-Grade</h3>
              <p className="text-muted-foreground">
                Our platform is trusted by leading businesses and enterprises worldwide.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <BarChartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Gain deep insights into your business performance with our powerful analytics tools.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <div className="bg-primary-foreground p-3 rounded-md mb-4 inline-block">
                <CogIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Effortless Automation</h3>
              <p className="text-muted-foreground">
                Streamline your workflows and eliminate manual tasks with our powerful automation tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-primary">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small businesses and startups.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-primary">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}>
                Get Started
              </Link>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-primary">Pro</h3>
              <p className="text-muted-foreground mb-6">Ideal for growing businesses and teams.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-primary">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}>
                Get Started
              </Link>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-primary">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Tailored for large organizations.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-primary">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-md">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "This platform has been a game-changer for our business.\n The features are top-notch, and the support
                  team is\n incredible."
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">John Doe</h4>
                  <p className="text-muted-foreground">CEO, Acme Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "I was hesitant at first, but this platform has exceeded\n all my expectations. It's user-friendly and
                  packed with\n powerful features."
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">Jane Appleseed</h4>
                  <p className="text-muted-foreground">Founder, Startup Ventures</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-md shadow-md">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "This platform has streamlined our operations and\n significantly improved our efficiency. Highly
                  recommended!"
                </p>
              </blockquote>
              <div className="flex items-center">

                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">Sarah Musk</h4>
                  <p className="text-muted-foreground">CTO, Tech Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}

function BarChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function CogIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>)
  );
}


function GaugeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function ShieldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>)
  );
}
