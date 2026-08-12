import { useState } from "react";
import axios from "axios";
import { Loader2, Wallet, IndianRupee, CreditCard, Percent, CalendarDays } from "lucide-react";
import { toast } from "sonner";

function EligibilityForm({ setResult }) {

  const [loanType, setLoanType] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEMI, setExistingEMI] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEligibility = async () => {

    if (
      !loanType ||
      !monthlyIncome ||
      !existingEMI ||
      !loanAmount ||
      !interestRate ||
      !tenure
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/eligibility/check",
        {
          monthlyIncome: Number(monthlyIncome),
          existingEMI: Number(existingEMI),
          loanAmount: Number(loanAmount),
          interestRate: Number(interestRate),
          tenure: Number(tenure),
        }
      );

      setResult({
        ...response.data,
        loanType: loanType,
        loanAmount: Number(loanAmount),
      });

      toast.success("Eligibility checked successfully!");

    } catch (error) {

      console.error(error);
      toast.error("Failed to check eligibility");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Wallet
              size={22}
              className="text-blue-600"
            />
          </div>

          <div>

            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Loan Details
            </p>

            <h2 className="text-2xl font-bold text-slate-800">
              Tell us about your loan
            </h2>

          </div>

        </div>

        <p className="text-slate-500">
          Enter your financial details to calculate your loan eligibility.
        </p>

      </div>


      <div className="space-y-5">


        {/* Loan Type */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Loan Type
          </label>

          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            disabled={loading}
            className="w-full border border-slate-200 rounded-xl p-3.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >

            <option value="">
              Select Loan Type
            </option>

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


        {/* Monthly Income */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Monthly Income (₹)
          </label>

          <div className="relative">

            <IndianRupee
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="80,000"
              disabled={loading}
              className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

          </div>

        </div>


        {/* Existing EMI */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Existing EMI (₹)
          </label>

          <div className="relative">

            <CreditCard
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="number"
              value={existingEMI}
              onChange={(e) => setExistingEMI(e.target.value)}
              placeholder="10,000"
              disabled={loading}
              className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

          </div>

        </div>


        {/* Loan Amount */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Loan Amount (₹)
          </label>

          <div className="relative">

            <IndianRupee
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="5,00,000"
              disabled={loading}
              className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

          </div>

        </div>


        {/* Interest Rate */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Interest Rate (%)
          </label>

          <div className="relative">

            <Percent
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="10"
              disabled={loading}
              className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

          </div>

        </div>


        {/* Loan Tenure */}

        <div>

          <label className="font-semibold text-slate-700 block mb-2">
            Loan Tenure (Years)
          </label>

          <div className="relative">

            <CalendarDays
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="5"
              disabled={loading}
              className="w-full border border-slate-200 rounded-xl p-3.5 pl-11 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

          </div>

        </div>


        {/* Check Eligibility Button */}

        <button
          onClick={checkEligibility}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition shadow-lg ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5"
          }`}
        >

          {loading ? (

            <>
              <Loader2
                className="animate-spin"
                size={20}
              />

              Checking Eligibility...

            </>

          ) : (

            <>
              Check Eligibility
            </>

          )}

        </button>


        {/* Security Note */}

        <div className="flex items-center justify-center gap-2 pt-2">

          <span className="w-2 h-2 bg-green-500 rounded-full"></span>

          <p className="text-xs text-slate-500">
            Your information is securely processed
          </p>

        </div>

      </div>

    </div>

  );
}

export default EligibilityForm;