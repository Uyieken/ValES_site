import React from "react";

const Compliance: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B]">
          Compliance & Regulatory Disclosure
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last Updated: February 2026
        </p>

        <div className="mt-12 space-y-12 text-gray-700 text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              1. Corporate Information
            </h2>
            <p>
              ValES is operated by <strong>Vales Concepts LTD.</strong>, a
              company duly registered under the laws of the Federal Republic of
              Nigeria.
            </p>
            <p className="mt-4">
              Registered Address: 5, KOLAWOLE STREET, ADDO ROAD, LEKKI, LAGOS
              STATE, NIGERIA
            </p>
            <p className="mt-2">RC Number: 9286202</p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              2. Nature of Operations
            </h2>
            <p>
              ValES operates as a technology platform that facilitates
              structured transaction workflows between buyers and sellers.
            </p>
            <p className="mt-4">ValES:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Is not a bank</li>
              <li>Is not a licensed deposit-taking institution</li>
              <li>Does not independently hold customer deposits</li>
              <li>Does not provide investment services</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              3. Payment Processing
            </h2>
            <p>
              All payments conducted through the ValES platform are processed by
              licensed third-party payment service providers, including but not
              limited to Paystack.
            </p>
            <p className="mt-4">
              Funds are conditionally handled within the infrastructure of these
              licensed processors in accordance with applicable Nigerian
              financial regulations.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              4. Anti-Fraud & Risk Controls
            </h2>
            <p>
              ValES implements structured controls to reduce fraud and misuse of
              the platform, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Transaction logging and audit trails</li>
              <li>Structured milestone confirmation workflows</li>
              <li>Dispute resolution procedures</li>
              <li>Account suspension for suspicious activity</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              5. Anti-Money Laundering (AML)
            </h2>
            <p>
              ValES does not directly hold or custody funds. However, we
              cooperate with licensed payment providers that are subject to
              Nigerian AML and Know Your Customer (KYC) regulations.
            </p>
            <p className="mt-4">
              ValES reserves the right to request identity verification, suspend
              suspicious accounts, and report unlawful activity to relevant
              authorities.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              6. Data Protection & NDPR
            </h2>
            <p>
              ValES processes personal data in accordance with the Nigeria Data
              Protection Regulation (NDPR) and applicable data protection laws.
            </p>
            <p className="mt-4">
              For more information, please refer to our Privacy Policy.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              7. Regulatory Cooperation
            </h2>
            <p>
              ValES cooperates with Nigerian regulatory and law enforcement
              authorities where legally required.
            </p>
            <p className="mt-4">
              We may suspend accounts, freeze transactions within the limits of
              our technical authority, or provide relevant data where mandated
              by law.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0B1F3B] mb-4">
              8. Contact
            </h2>
            <p>Email: compliance@vales.africa</p>
            <p className="mt-2">
              Registered Address: 5, KOLAWOLE STREET, ADDO ROAD, LEKKI, LAGOS
              STATE, NIGERIA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
