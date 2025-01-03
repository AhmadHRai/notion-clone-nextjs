import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="dark:bg-[#1f1f1f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="mt-2">
            Welcome to ByteSheet. We respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy outlines the types of information we collect, how it is used,
            and the steps we take to safeguard it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mt-2">
            ByteSheet does not directly collect personal information. However,
            when you use Clerk for authentication, the following data may be
            collected:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Personal Identification Information (e.g., name, email address,
              authentication method)
            </li>
            <li>Technical data such as IP addresses and device details</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="mt-2">
            The data managed by Clerk is used solely for authentication
            purposes. We do not access or store this information beyond what is
            required for authentication. Clerk may use this data to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Enable secure sign-in and authentication</li>
            <li>Provide user account management</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy as necessary. Any changes will be
            posted on this page, and we will notify users of significant
            updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">
            If you have questions or concerns about this Privacy Policy, feel
            free to contact us at:
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
