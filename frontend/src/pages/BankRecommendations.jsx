import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import {
  Building2,
  Percent,
  IndianRupee,
  Trophy,
  Search,
  ArrowUpRight,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { getRecommendedBanks } from "../services/bankRecommendationService";

function BankRecommendations() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const loanTypeFromUrl = searchParams.get("loanType");
  const loanAmountFromUrl = searchParams.get("loanAmount");

  const [loanType, setLoanType] = useState(
    loanTypeFromUrl || "HOME"
  );

  const [loanAmount, setLoanAmount] = useState(
    loanAmountFromUrl || 5000000
  );
const [tenure, setTenure] = useState(20);
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);

  // -----------------------------------------
  // Fetch Recommended Banks
  // -----------------------------------------

  const fetchBanks = async (
    type = loanType,
    amount = loanAmount
  ) => {

    try {

      setLoading(true);

      // Get logged-in user
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      // User must be logged in
      if (!user) {

        console.error("User not logged in");

        setBanks([]);

        return;
      }

      // Get personalized recommendations
      const data = await getRecommendedBanks(
        type,
        Number(amount),
        user.id
      );

      setBanks(data);

    } catch (error) {

      console.error(
        "Failed to fetch bank recommendations:",
        error
      );

      setBanks([]);

    } finally {

      setLoading(false);

    }
  };


  // -----------------------------------------
  // Load Recommendations
  // -----------------------------------------

  useEffect(() => {

    if (
      loanTypeFromUrl &&
      loanAmountFromUrl
    ) {

      setLoanType(loanTypeFromUrl);

      setLoanAmount(loanAmountFromUrl);

      fetchBanks(
        loanTypeFromUrl,
        Number(loanAmountFromUrl)
      );

    } else {

      fetchBanks();

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [
    loanTypeFromUrl,
    loanAmountFromUrl
  ]);


  // -----------------------------------------
  // Currency Formatter
  // -----------------------------------------

  const formatCurrency = (amount) => {

    return Number(amount).toLocaleString(
      "en-IN"
    );

  };
  const calculateEMI = (principal, annualRate, years) => {

  const P = Number(principal);
  const R = Number(annualRate) / 12 / 100;
  const N = Number(years) * 12;

  if (!P || !R || !N) {
    return 0;
  }

  const emi =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  return emi;
};


  // -----------------------------------------
  // JSX
  // -----------------------------------------

  return (

    <div className="min-h-screen bg-slate-50 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-6">


        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-8 md:p-10 mb-8 shadow-xl">

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />

          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-white/5 rounded-full" />

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-4">

              <div className="bg-white/15 p-3 rounded-2xl">

                <Building2 size={24} />

              </div>

              <span className="text-blue-100 font-medium">
                LoanWise Smart Recommendations
              </span>

            </div>


            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Personalized Bank Recommendations
            </h1>


            <p className="text-blue-100 max-w-2xl text-base md:text-lg">

              LoanWise analyzes your financial profile,
              loan amount and available banks to find
              the most suitable options for you.

            </p>


            {/* Personalized Badge */}

            <div className="mt-5 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">

              <UserCheck size={17} />

              Personalized for your financial profile

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* SEARCH SECTION */}
        {/* ================================= */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-8 mb-8">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">

              <Search
                size={21}
                className="text-blue-600"
              />

            </div>


            <div>

              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">

                Loan Requirements

              </p>


              <h2 className="text-xl font-bold text-slate-800">

                Find suitable banks

              </h2>

            </div>

          </div>


          <div className="grid md:grid-cols-4 gap-5">


            {/* Loan Type */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">

                Loan Type

              </label>


              <select
                value={loanType}
                onChange={(e) =>
                  setLoanType(e.target.value)
                }
                className="w-full border border-slate-200 rounded-xl p-3.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >

                <option value="HOME">
                  Home Loan
                </option>

                <option value="PERSONAL">
                  Personal Loan
                </option>

                <option value="CAR">
                  Car Loan
                </option>

              </select>

            </div>


            {/* Loan Amount */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">

                Loan Amount

              </label>


              <div className="relative">

                <IndianRupee
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />


                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(e.target.value)
                  }
                  className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

              </div>

            </div>
            {/* Loan Tenure */}

<div>

  <label className="block text-sm font-semibold text-slate-700 mb-2">
    Loan Tenure
  </label>

  <div className="relative">

    <input
      type="number"
      min="1"
      max="40"
      value={tenure}
      onChange={(e) =>
        setTenure(e.target.value)
      }
      className="w-full border border-slate-200 rounded-xl p-3.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
      Years
    </span>

  </div>

</div>


            {/* Search Button */}

            <div className="flex items-end">

              <button
                onClick={() =>
                  fetchBanks(
                    loanType,
                    Number(loanAmount)
                  )
                }
                disabled={loading}
                className={`w-full p-3.5 rounded-xl font-semibold transition shadow-lg flex items-center justify-center gap-2 text-white ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5"
                }`}
              >

                <Search size={19} />

                {loading
                  ? "Finding..."
                  : "Find Best Banks"}

              </button>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* LOADING */}
        {/* ================================= */}

        {loading && (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-5" />


            <h3 className="text-xl font-semibold text-slate-800">

              Analyzing your profile...

            </h3>


            <p className="text-slate-500 mt-2">

              LoanWise is comparing banks based on
              your financial information.

            </p>

          </div>

        )}


        {/* ================================= */}
        {/* NO BANKS */}
        {/* ================================= */}

        {!loading &&
          banks.length === 0 && (

            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

              <Building2
                size={48}
                className="mx-auto text-slate-300 mb-4"
              />


              <h3 className="text-xl font-semibold text-slate-800">

                No suitable banks found

              </h3>


              <p className="text-slate-500 mt-2">

                Try changing your loan type or
                requested amount.

              </p>

            </div>

          )}


        {/* ================================= */}
        {/* RESULTS */}
        {/* ================================= */}

        {!loading &&
          banks.length > 0 && (

            <div>


              {/* Result Summary */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

                <div>

                  <h2 className="text-2xl font-bold text-slate-800">

                    Best Matches

                  </h2>


                  <p className="text-slate-500 mt-1">

                    Ranked using your financial profile,
                    loan amount and bank interest rates.

                  </p>

                </div>


                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold">

                  {banks.length} banks found

                </div>

              </div>


              {/* ================================= */}
              {/* BANK CARDS */}
              {/* ================================= */}

              <div className="space-y-5">

                {banks.map((bank, index) => (

                  <div
                    key={bank.id}
                    className={`relative bg-white rounded-3xl shadow-lg border p-6 md:p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                      index === 0
                        ? "border-blue-200 ring-2 ring-blue-100"
                        : "border-slate-100"
                    }`}
                  >


                    {/* Best Match Badge */}

                    {index === 0 && (

                      <div className="absolute -top-3 left-6">

                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">

                          <Trophy size={15} />

                          Best Match

                        </div>

                      </div>

                    )}


                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 pt-2">


                      {/* Bank */}

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                          <Building2
                            size={27}
                            className="text-blue-600"
                          />

                        </div>


                        <div>

                          <div className="flex items-center gap-3">

                            <span className="text-sm font-bold text-blue-600">

                              #{index + 1}

                            </span>


                            <h3 className="text-xl font-bold text-slate-800">

                              {bank.bankName}

                            </h3>

                          </div>


                          <p className="text-slate-500 mt-1">

                            {bank.loanType} Loan

                          </p>

                        </div>

                      </div>

{/* Details */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">


                        {/* Interest */}

                        <div>

                          <div className="flex items-center gap-2 text-slate-500 mb-1">

                            <Percent size={16} />

                            <span className="text-sm">

                              Interest Rate

                            </span>

                          </div>


                          <p className="text-xl font-bold text-green-600">

                            {bank.interestRate}%

                          </p>

                        </div>


                        {/* Processing Fee */}

                        <div>

                          <p className="text-sm text-slate-500 mb-1">

                            Processing Fee

                          </p>


                          <p className="text-xl font-semibold text-slate-800">

                            {bank.processingFee}%

                          </p>

                        </div>


                        {/* Maximum Loan */}

                        <div>

                          <p className="text-sm text-slate-500 mb-1">

                            Maximum Loan

                          </p>


                          <p className="text-xl font-semibold text-slate-800">

                            ₹{formatCurrency(
                              bank.maxLoanAmount
                            )}

                          </p>

                        </div>

                      </div>

                    </div>
                    {/* Estimated EMI */}

<div>

  <div className="flex items-center gap-2 text-slate-500 mb-1">

    <IndianRupee size={16} />

    <span className="text-sm">
      Estimated EMI
    </span>

  </div>

  <p className="text-xl font-bold text-blue-600">

    ₹
    {formatCurrency(
      Math.round(
        calculateEMI(
          loanAmount,
          bank.interestRate,
          tenure
        )
      )
    )}

  </p>

  <p className="text-xs text-slate-400 mt-1">
    for {tenure} years
  </p>

</div>


                    {/* Bottom Info */}

                    <div className="border-t border-slate-100 mt-6 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">


                      <div className="flex items-center gap-2 text-sm text-slate-500">

                        <ShieldCheck
                          size={17}
                          className="text-green-600"
                        />

                        Personalized recommendation based
                        on your profile

                      </div>

<button
  onClick={() =>
    navigate("/bank-details", {
      state: {
        bank,
        loanAmount: Number(loanAmount),
      },
    })
  }
  className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:text-blue-800 transition"
>
  View Details
  <ArrowUpRight size={16} />
</button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

      </div>

    </div>

  );

}

export default BankRecommendations;