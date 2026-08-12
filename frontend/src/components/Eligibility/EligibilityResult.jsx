import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  IndianRupee,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function EligibilityResult({ result }) {

  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
            <Sparkles
              size={22}
              className="text-slate-500"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Your Assessment
            </p>

            <h2 className="text-2xl font-bold text-slate-800">
              Eligibility Result
            </h2>
          </div>

        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center">

          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <Sparkles
              size={28}
              className="text-slate-400"
            />
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Ready to check your eligibility?
          </h3>

          <p className="text-slate-500">
            Fill in your loan details and click{" "}
            <strong>Check Eligibility</strong>.
          </p>

        </div>

      </div>
    );
  }

  const findBestBanks = () => {

    navigate(
      `/bank-recommendations?loanType=${result.loanType}&loanAmount=${result.loanAmount}`
    );

  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Sparkles
              size={22}
              className="text-blue-600"
            />
          </div>

          <div>

            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Your Assessment
            </p>

            <h2 className="text-2xl font-bold text-slate-800">
              Eligibility Result
            </h2>

          </div>

        </div>

        <p className="text-slate-500 mt-3">
          Here's what LoanWise calculated for your loan.
        </p>

      </div>


      {/* EMI Cards */}

      <div className="grid sm:grid-cols-2 gap-4 mb-6">

        {/* Monthly EMI */}

        <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">

          <div className="flex items-center gap-2 mb-2">

            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <IndianRupee
                size={16}
                className="text-blue-600"
              />
            </div>

            <p className="text-sm font-medium text-slate-500">
              Monthly EMI
            </p>

          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
            ₹{Number(result.monthlyEMI).toFixed(2)}
          </h3>

        </div>


        {/* Total EMI */}

        <div className="rounded-2xl bg-purple-50 border border-purple-100 p-5">

          <div className="flex items-center gap-2 mb-2">

            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <IndianRupee
                size={16}
                className="text-purple-600"
              />
            </div>

            <p className="text-sm font-medium text-slate-500">
              Total EMI
            </p>

          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
            ₹{Number(result.totalEMI).toFixed(2)}
          </h3>

        </div>

      </div>


      {/* Eligibility Status */}

      <div
        className={`rounded-2xl p-5 border mb-6 ${
          result.eligible
            ? "bg-green-50 border-green-200"
            : "bg-red-50 border-red-200"
        }`}
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500 mb-2">
              Eligibility Status
            </p>

            <h3
              className={`text-2xl md:text-3xl font-bold ${
                result.eligible
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {result.eligible
                ? "You're Eligible"
                : "Not Eligible"}
            </h3>

          </div>

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              result.eligible
                ? "bg-green-100"
                : "bg-red-100"
            }`}
          >

            {result.eligible ? (
              <CheckCircle2
                size={28}
                className="text-green-600"
              />
            ) : (
              <XCircle
                size={28}
                className="text-red-600"
              />
            )}

          </div>

        </div>

      </div>


      {/* Message */}

      <div className="mb-6">

        <p className="text-sm font-medium text-slate-500 mb-2">
          Assessment Message
        </p>

        <p className="text-slate-700 leading-relaxed">
          {result.message}
        </p>

      </div>


      {/* Find Banks */}

      {result.eligible && (

        <div className="pt-2">

          <button
            onClick={findBestBanks}
            className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold transition shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >

            <span>
              Find Best Banks
            </span>

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />

          </button>

          <p className="text-xs text-slate-500 text-center mt-3">
            LoanWise will rank suitable banks based on your loan requirements.
          </p>

        </div>

      )}

    </div>
  );
}

export default EligibilityResult;