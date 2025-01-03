import Link from "next/link";
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="dark:bg-[#1f1f1f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="mt-2">
            Welcome to ByteSheet. These Terms and Conditions govern your use of
            our platform and services. By accessing or using ByteSheet, you
            agree to comply with these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Account Usage</h2>
          <p className="mt-2">
            To use ByteSheet, you must create an account via our authentication
            provider, Clerk. You agree to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Provide accurate and complete information during registration
            </li>
            <li>Keep your login credentials secure and confidential</li>
            <li>Immediately notify us of any unauthorized account activity</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Acceptable Use</h2>
          <p className="mt-2">When using ByteSheet, you agree not to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Engage in any unlawful or harmful activity</li>
            <li>
              Upload or share content that is offensive, defamatory, or violates
              intellectual property rights
            </li>
            <li>Attempt to disrupt or compromise the platform’s security</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p className="mt-2">
            All content and materials on ByteSheet, including but not limited to
            text, graphics, logos, and software, are the intellectual property
            of ByteSheet or its licensors. Unauthorized use is strictly
            prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p className="mt-2">
            ByteSheet and its affiliates are not liable for any direct,
            indirect, incidental, or consequential damages arising from your use
            of our platform. Use ByteSheet at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Termination</h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate your account at any
            time for violations of these terms or other lawful reasons. Upon
            termination, you must cease using ByteSheet immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Changes to Terms</h2>
          <p className="mt-2">
            We may update these Terms and Conditions from time to time. Any
            changes will be posted on this page, and continued use of ByteSheet
            implies acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">
            For questions or concerns regarding these Terms and Conditions, you
            can reach us at:
          </p>
          <Link
            href="https://ahmadalrai.com/#contact"
            className="mt-2 underline"
          >
            This URL
          </Link>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-10">
          <p>
            &copy; {new Date().getFullYear()} ByteSheet. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
