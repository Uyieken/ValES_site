import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B]">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last Updated: February 2026
        </p>

        <div className="mt-12 space-y-12 text-gray-700 text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              1. Introduction
            </h2>
            <p>Welcome to Vales (“Vales”, “we”, “our”, or “us”).</p>
            <p className="mt-4">
              Vales is a technology platform that facilitates structured
              transaction workflows between buyers, vendors, and freelancers. By
              accessing or using our website, mobile application, or related
              services (collectively, the “Platform”), you agree to be bound by
              these Terms of Service (“Terms”).
            </p>
            <p className="mt-4">
              If you do not agree to these Terms, you must not use the Platform.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              2. Nature of Service
            </h2>

            <p className="mb-4">
              Vales provides a structured transaction workflow system that
              enables parties to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Create conditional transactions</li>
              <li>
                Process payments through licensed third-party payment processors
              </li>
              <li>Confirm milestones or delivery</li>
              <li>Trigger conditional fund release</li>
            </ul>

            <div className="mt-6 space-y-3">
              <p>
                <strong>Vales:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is not a bank</li>
                <li>Does not accept deposits</li>
                <li>Does not operate as a licensed escrow institution</li>
                <li>Does not provide financial, investment, or legal advice</li>
              </ul>
            </div>

            <p className="mt-6">
              All payments are processed via licensed payment service providers
              such as Paystack.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              3. Eligibility
            </h2>

            <p className="mb-4">To use Vales, you must:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have legal capacity to enter binding contracts</li>
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable Nigerian laws</li>
            </ul>

            <p className="mt-6">
              We reserve the right to suspend or terminate accounts that provide
              false information.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              4. User Accounts
            </h2>

            <p className="mb-4">You are responsible for:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining confidentiality of your login credentials</li>
              <li>All activity under your account</li>
              <li>Ensuring information provided is accurate and updated</li>
            </ul>

            <p className="mt-6">
              Vales reserves the right to suspend accounts suspected of fraud,
              abuse, or illegal activity.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              5. Transaction Workflow
            </h2>

            <ol className="list-decimal pl-6 space-y-2">
              <li>A transaction is created.</li>
              <li>The buyer makes payment via a licensed payment processor.</li>
              <li>Funds are conditionally held by the payment processor.</li>
              <li>
                Release occurs only upon confirmation of predefined conditions.
              </li>
              <li>
                If disputes arise, the dispute resolution process is triggered.
              </li>
            </ol>

            <p className="mt-6">
              Vales does not independently hold customer funds.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              6. Fees
            </h2>

            <p>
              Vales may charge transaction or service fees, which will be
              clearly disclosed before confirmation of any transaction.
            </p>

            <p className="mt-4">
              All fees are non-refundable except where required by law.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              7. Dispute Resolution
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Either party may initiate a dispute within the defined period.
              </li>
              <li>Parties may be required to submit supporting evidence.</li>
              <li>Vales will review submissions objectively.</li>
              <li>
                Decisions are made based on predefined eligibility criteria.
              </li>
            </ul>

            <p className="mt-6">
              Vales’ dispute determination is final within the Platform, but
              does not prevent parties from pursuing legal remedies under
              Nigerian law.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              8. Prohibited Activities
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Engage in fraudulent activity</li>
              <li>Use the Platform for illegal transactions</li>
              <li>Attempt to bypass structured release workflows</li>
              <li>Misrepresent goods or services</li>
              <li>Violate Nigerian financial regulations</li>
            </ul>

            <p className="mt-6">
              Violation may result in account suspension and reporting to
              relevant authorities.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              9. Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted under Nigerian law, Vales shall
              not be liable for indirect or consequential damages, loss of
              profits, loss resulting from user misconduct, or delays caused by
              third-party payment processors.
            </p>

            <p className="mt-4">
              Our total liability shall not exceed the total fees paid by you to
              Vales within the last three (3) months.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              10. Termination
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Suspend or terminate access</li>
              <li>Cancel transactions suspected of fraud</li>
              <li>Report illegal activities to regulatory authorities</li>
            </ul>

            <p className="mt-6">Users may close their account at any time.</p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              11. Governing Law
            </h2>

            <p>
              These Terms are governed by the laws of the Federal Republic of
              Nigeria. Any disputes shall be subject to the exclusive
              jurisdiction of Nigerian courts.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              12. Changes to Terms
            </h2>

            <p>
              Vales may update these Terms from time to time. Continued use of
              the Platform constitutes acceptance of revised Terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              13. Contact
            </h2>

            <p>Email: support@vales.africa</p>
            <p className="mt-2">
              Address: 5, KOLAWOLE STREET, ADDO ROAD, LEKKI, LAGOS STATE,
              NIGERIA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
