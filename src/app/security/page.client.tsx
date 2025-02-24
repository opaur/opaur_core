"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import { type User } from "@supabase/auth-helpers-nextjs";

export default function SecurityPolicy({ user }: { user: User | null }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
        <div className="mx-auto max-w-screen-xl px-10 py-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Security Policy
          </h2>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            Last Updated: February 2025
          </p>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            At Opaur ("we," "our," "us"), we prioritize the security of our users' ("you," "your") data. This Security Policy outlines the measures we implement to protect your information when you use our website and services.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Data Encryption</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We employ robust encryption protocols to safeguard your data:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Data at Rest: All stored data is encrypted using AES-256 encryption standards.</li>
            <li>Data in Transit: Data transmitted between your device and our servers is protected using SSL/TLS protocols to prevent interception or tampering.</li>
          </ul>


          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Compliance and Certifications</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Our commitment to security is demonstrated through adherence to industry standards:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>SOC 2 Type 2 Compliance: We have undergone independent audits to verify our controls related to security, availability, and confidentiality.</li>
            <li>HIPAA Compliance: For clients in the healthcare sector, we offer HIPAA-compliant services, ensuring the protection of Protected Health Information (PHI).</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Data Backup and Recovery</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We implement regular data backup procedures to ensure data integrity and availability:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Daily Backups: All customer databases are backed up daily to prevent data loss.</li>
            <li>Point-in-Time Recovery: Our systems support restoring databases to any specific point in time, providing flexibility in data recovery.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Vulnerability Management</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We proactively identify and address potential security vulnerabilities:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Security Suite: Our platform includes tools like the Security Advisor and automated notifications to assist in identifying and mitigating misconfigurations.</li>
            <li>Responsible Disclosure Program: We encourage security researchers to report vulnerabilities responsibly and provide a structured process for disclosure.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">User Responsibilities</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            While we implement extensive security measures, users also play a crucial role in maintaining security:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Account Security: Users are responsible for maintaining the confidentiality of their login credentials and enabling MFA for enhanced protection.</li>
            <li>Data Management: Users should ensure that sensitive data is handled appropriately and shared only with authorized parties.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Changes to This Policy</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We may update this Security Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes through our website or other appropriate channels.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Contact Us</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            If you have any questions or concerns about this Security Policy, please contact us at info@opaur.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
