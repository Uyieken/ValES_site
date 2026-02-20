import React from "react";

const refundMatrix = [
  {
    scenario: "Wrong item delivered",
    eligible: true,
    detail: "Eligible for refund subject to evidence review",
  },
  {
    scenario: "Item damaged on arrival",
    eligible: true,
    detail: "Eligible upon submission of supporting proof",
  },
  {
    scenario: "Fraud / Counterfeit item",
    eligible: true,
    detail: "Transaction reviewed under fraud policy",
  },
  {
    scenario: "Changed mind after purchase",
    eligible: false,
    detail: "Buyer preference changes are not covered",
  },
  {
    scenario: "Item matches description but not preferred",
    eligible: false,
    detail: "Transaction terms considered fulfilled",
  },
];

const RefundPolicy: React.FC = () => {
  return (
    <section className="relative bg-white py-28 px-6" id="refund">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#3570fb] font-bold tracking-widest uppercase text-xs">
            Operational Transparency
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0B1F3B]">
            Refund & Dispute Matrix
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            ValES applies predefined eligibility rules to determine resolution
            outcomes. Disputes are assessed using structured evidence and clear
            transaction criteria.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#0B1F3B] text-white">
              <tr>
                <th className="px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                  Transaction Scenario
                </th>
                <th className="px-8 py-6 text-sm font-semibold uppercase tracking-wider text-center">
                  Eligibility
                </th>
                <th className="hidden md:table-cell px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                  Resolution Detail
                </th>
              </tr>
            </thead>

            <tbody>
              {refundMatrix.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-50 hover:bg-blue-50/10 transition-colors"
                >
                  <td className="px-8 py-6 text-[#0B1F3B] font-medium">
                    {item.scenario}
                  </td>

                  <td className="px-8 py-6 text-center">
                    {item.eligible ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                        Eligible
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase">
                        Not Eligible
                      </span>
                    )}
                  </td>

                  <td className="hidden md:table-cell px-8 py-6 text-gray-500 text-sm">
                    {item.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dispute Framework */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100">
            <h4 className="font-semibold text-[#0B1F3B] mb-2">
              Defined Dispute Window
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Disputes must be raised within 24 hours of delivery status. After
              this window, the transaction proceeds to completion.
            </p>
          </div>

          <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100">
            <h4 className="font-semibold text-[#0B1F3B] mb-2">
              Evidence-Based Review
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Supporting documentation such as timestamped photos or videos may
              be required to assess eligibility.
            </p>
          </div>

          <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100">
            <h4 className="font-semibold text-[#0B1F3B] mb-2">
              Payment Processing
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Payments are processed and released through licensed payment
              providers in accordance with transaction conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
