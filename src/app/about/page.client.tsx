"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import { type User } from "@supabase/auth-helpers-nextjs";

export default function PrivacyPolicy({ user }: { user: User | null }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
        <div className="mx-auto max-w-screen-xl px-10 py-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Privacy Policy
          </h2>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            Last Updated: January 2025
          </p>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            Opaur (we, our, us) is committed to protecting the privacy of our users (you, your). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.
          </p>
          
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Information We Collect</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We may collect personal information such as your name, email address, and other contact details when you interact with our services. Additionally, we may collect usage data, including information collected automatically through cookies, web beacons, and other tracking technologies.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">How We Use Your Information</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We use your information to provide, operate, and improve our services. Specifically:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>To improve the functionality of our application.</li>
            <li>To communicate with you, including sending updates and responding to inquiries.</li>
            <li>To monitor and analyze usage and trends to enhance your experience with our services.</li>
            <li>To comply with legal obligations and resolve disputes.</li>
          </ul>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Use of Google User Data: We use Google user data solely to provide or improve the functionality of our application. We do not use Google user data for any purposes other than those explicitly allowed by Google and as detailed in this privacy policy.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Data Retention and Deletion</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Retention of Google User Data: We retain Google user data only for as long as necessary to fulfill the purposes outlined in this privacy policy. Once the data is no longer needed, we will delete it in a secure manner. 
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Users may also request the deletion of their data at any time by contacting us directly at info@opaur.com.
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Deletion of Data: If you request the deletion of your Google user data, we will ensure that it is permanently and securely removed from our systems within a reasonable time frame, in accordance with our data retention policies and applicable law.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Disclosure of Your Information</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We do not sell Google user data to third parties. We may share your information with third parties only under the following circumstances:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>With your consent.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect and defend our rights or property.</li>
            <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
          </ul>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Google Workspace APIs are not used to develop, improve, or train generalized AI and/or ML models.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Data Protection Measures</h3>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>We perform daily database backups to maintain data integrity.</li>
            <li>All private data is stored using encryption algorithms.</li>
            <li>Users can request data deletion by sending an email to devops@opaur.com.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Changes to This Policy</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through our website or by other means, giving you the opportunity to review the changes before they become effective.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Contact Us</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            If you have any questions or concerns about this Privacy Policy, please contact us at info@opaur.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
