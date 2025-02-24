"use client";
import HeaderComp from "@/components/Headerc";
import Footer from "@/components/Footer/index";
import Link from "next/link";
import { type User } from "@supabase/auth-helpers-nextjs";

export default function TermsAndConditions({ user }: { user: User | null }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComp user={user} />
      <main className="flex-grow mx-auto w-full max-w-screen-lg p-6 md:p-10">
        <div className="mx-auto max-w-screen-xl px-10 py-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Terms and Conditions
          </h2>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
            Last Updated: February 23, 2025
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Interpretation and Definitions</h3>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Interpretation</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Definitions</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li>Account means a unique account created for You to access our Service or parts of our Service.</li>
            <li>Country refers to: Florida, United States</li>
            <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Opaur Av Calle 116 #21-38, Bogotá, Bogotá D.C.</li>
            <li>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li>Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.</li>
            <li>Free Trial refers to a limited period of time that may be free when purchasing a Subscription.</li>
            <li>Promotions refer to contests, sweepstakes or other promotions offered through the Service.</li>
            <li>Service refers to the Website.</li>
            <li>Subscriptions refer to the services or access to the Service offered on a subscription basis by the Company to You.</li>
            <li>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li>Third-party Social Media Service means any services or content provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li>Website refers to Opaur, accessible from opaur.com</li>
            <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Acknowledgment</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Subscriptions</h3>
          
          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Consumption-Based Model</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            All Opaur.com subscription plans operate on a consumption-based model, determined by the number of credits used on the platform. Credits represent a flexible unit of usage depending on the features or services accessed, such as AI-driven long-form content, voice calls, and messaging via text agents. Specific consumption details include:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>~333 credits per minute of an AI voice call</li>
            <li>10 credit per message in text agents</li>
          </ul>

          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Plan Credits and Costs</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Each subscription plan comes with a predetermined number of credits:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Opaur Free: Includes 1,000 credits at no cost</li>
            <li>Opaur Lite ($19/month): Includes 20,000 credits</li>
            <li>Opaur Pro ($99/month): Includes 100,000 credits</li>
            <li>Opaur ScaleUp ($499/month): Includes 500,000 credits</li>
          </ul>

          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Overage Charges</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          If your consumption exceeds the allocated credits for your subscription plan, additional credits will be charged at a rate of $1 per 1,000 credits. This overage will be billed at the end of the current billing cycle, and by subscribing to a plan, you agree to these terms.          </p>
          
          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Billing Agreement</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          By using Opaur platform, you consent to the tracking of your consumption and agree to pay for any overages beyond your plans credit allocation. All charges, including overages, will appear on your account invoice at the close of each billing period.
          </p>

          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Subscription period</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            The Service or some parts of the Service are available only with a paid Subscription. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription. At the end of each period, Your Subscription will automatically renew under the exact same conditions unless You cancel it or the Company cancels it.
          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Subscription cancellations</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          You may cancel Your Subscription renewal either through Your Account settings page or by contacting the Company. You will not receive a refund for the fees You already paid for Your current Subscription period and You will be able to access the Service until the end of Your current Subscription period.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Billing</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          You shall provide the Company with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Fee Changes</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Subscription period. The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to terminate Your Subscription before such change becomes effective. Your continued use of the Service after the Subscription fee change comes into effect constitutes Your agreement to pay the modified Subscription fee amount.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Refunds</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Except when required by law, paid Subscription fees are non-refundable. Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Free Trial</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          The Company may, at its sole discretion, offer a Subscription with a Free Trial for a limited period of time. You may be required to enter Your billing information in order to sign up for the Free Trial. If You do enter Your billing information when signing up for a Free Trial, You will not be charged by the Company until the Free Trial has expired. On the last day of the Free Trial period, unless You cancelled Your Subscription, You will be automatically charged the applicable Subscription fees for the type of Subscription You have selected. At any time and without notice, the Company reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Promotions</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Any Promotions made available through the Service may be governed by rules that are separate from these Terms. If You participate in any Promotions, please review the applicable rules as well as our Privacy policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply.          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">User Accounts</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service. You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Intellectual Property</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Your Feedback to Us</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Links to Other Websites</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Termination</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Limitation of Liability</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You have not purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party liability will be limited to the greatest extent permitted by law.          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">“AS IS” and “AS AVAILABLE” Disclaimer</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. Without limiting the foregoing, neither the Company nor any of the companys provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.          </p>



          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Communications</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            By providing your contact information, including your phone number, you consent to receive communications from Opaur via SMS, MMS, and voice calls. These communications may include updates, promotional offers, account notifications, and other information related to our services.
          </p>

          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Opt-In Consent</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            To receive communications from us, you must provide explicit consent. This can be done by:
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Entering your mobile number on our website and agreeing to receive communications by accepting these terms</li>
            <li>Texting a designated keyword to our short code or long code number, as specified in our promotional materials</li>
            <li>Providing verbal consent during a voice interaction with our representatives</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Message and Call Frequency</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          The frequency of communications you receive may vary based on your interactions with us and the nature of the information we need to share. For SMS and MMS, you may receive up to [insert number] messages per month. For voice calls, the frequency will depend on your consent and the purpose of the communication.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Message, Data, and Call Charges</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Standard message, data, and voice call rates may apply to each communication sent or received, as determined by your service provider. Please consult your mobile or phone service plan for details.
          </p>
          <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Opt-Out Instructions</h4>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          You may opt out of receiving communications at any time by:          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Replying “STOP” to any SMS message received from us to stop text messages.</li>
            <li>Informing the caller during a voice call that you wish to opt out of future voice communications.</li>
            <li>Contacting our customer support at [insert contact information] and requesting to opt out of communications.</li>
          </ul>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Governing Law</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Disputes Resolution</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">For European Union (EU) Users </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.          </p>


          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">United States Federal Government End Use Provisions</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          If You are a U.S. federal government end user, our Service is a “Commercial Item” as that term is defined at 48 C.F.R. §2.101.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">United States Legal Compliance</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Severability and Waiver</h3>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Severability</h3>

          <p className="mb-6 text-gray-600 dark:text-gray-300">
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Waiver</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a partys ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.          </p>
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Translation Interpretation</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.          </p>
        
          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Changes to These Terms and Conditions</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
          </p>

          <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Contact Us</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            If you have any questions about these Terms and Conditions, You can contact us by visiting this page on our website: opaur.com/contact
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};