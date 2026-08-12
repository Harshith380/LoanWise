import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, BadgeCheck } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">

              <BadgeCheck size={18} />

              Trusted Financial Platform

            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-8">

              Compare Loans

              <br />

              Calculate EMI

              <br />

              Make Smarter Decisions

            </h1>

            <p className="text-blue-100 mt-8 text-lg leading-8 max-w-xl">

              LoanWise helps you compare banks, calculate EMI,
              check eligibility and discover the best loan offers
              in one secure platform.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              {/* Get Started */}

              <Link
                to="/register"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>

              {/* Compare Loans */}

              <Link
                to="/compare"
                className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-700 transition"
              >
                Compare Loans

                <ArrowRight size={18} />

              </Link>

            </div>

            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-2">

                <ShieldCheck />

                Secure

              </div>

              <div className="flex items-center gap-2">

                ✔ Free EMI Calculator

              </div>

              <div className="flex items-center gap-2">

                ✔ Instant Comparison

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h2 className="text-2xl font-bold text-gray-800">

                Quick Loan Overview

              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Loan Amount
                  </span>

                  <span className="font-bold text-gray-800">
                    ₹10,00,000
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Interest Rate
                  </span>

                  <span className="font-bold text-green-600">
                    8.50%
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Monthly EMI
                  </span>

                  <span className="font-bold text-blue-600">
                    ₹20,499
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Loan Tenure
                  </span>

                  <span className="font-bold text-gray-800">
                    5 Years
                  </span>

                </div>

              </div>

              {/* Check Eligibility */}

              <Link
                to="/eligibility"
                className="block w-full mt-8 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition text-center font-semibold"
              >
                Check Eligibility
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;