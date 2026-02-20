import React, { useState } from "react";
import { supabase } from "../lib/supabase";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("buyer");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: email.trim().toLowerCase(), role }]);

    if (error) {
      if (error.code === "23505") {
        setError("You're already on the waitlist 🔥");
      } else {
        setError("Something went wrong. Try again.");
      }
    } else {
      setSuccess(true);
      setEmail("");
    }
    setLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/handshake.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="waitlist"
      >
        <div className="absolute inset-0 bg-[#0B1F3B]/65 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
          <span className="bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Secure Your Transactions <br />
            <span className="text-blue-500">With Certainty.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Vales is the specialized bridge that protects funds and builds trust
            between buyers and sellers in the digital marketplace.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-10 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Join the Exclusive Waitlist
          </button>
        </div>
      </section>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0B1F3B]/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-lg p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 font-bold"
            >
              ✕
            </button>

            {!success ? (
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1F3B] mb-2">
                  Reserve Your Spot
                </h3>
                <p className="text-slate-500 text-sm mb-8">
                  Get 0% transaction fees for your first month by joining the
                  founding 500 members.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-black focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="text-left">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">
                      I am a...
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-black focus:outline-none focus:border-blue-500 transition appearance-none"
                    >
                      <option value="buyer">Online Buyer</option>
                      <option value="vendor">Social Commerce Vendor</option>
                      <option value="freelancer">
                        Service Provider / Freelancer
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-[#0B1F3B] text-white rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all disabled:opacity-50 mt-4"
                  >
                    {loading ? "Registering..." : "Get Early Access"}
                  </button>
                </form>
                {error && (
                  <p className="mt-4 text-red-500 text-xs font-bold">{error}</p>
                )}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  ✅
                </div>
                <h3 className="text-2xl font-black text-[#0B1F3B] mb-2">
                  You're on the list!
                </h3>
                <p className="text-slate-500">
                  We've reserved your spot. Watch your inbox for a verification
                  email from Vales.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 text-blue-600 font-bold uppercase text-xs tracking-widest"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
