import { useLocation, useNavigate } from "react-router-dom";
import {
  Building2,
  Percent,
  IndianRupee,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function BankDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const bank = location.state?.bank;
  const loanAmount = location.state?.loanAmount;

  // If someone opens the page directly
  // without selecting a bank
  if (!bank) {

    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-16">

        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <Building2
              size={50}
              className="mx-auto text-slate-300 mb-5"
            />

            <h1 className="text-2xl font-bold text-slate-800 mb-3">
              Bank details not available
            </h1>

            <p className="text-slate-500 mb-6">
              Please select a bank from the recommendations page.
            </p>

            <button
              onClick={() => navigate("/recommendations")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Back to Recommendations
            </button>

          </div>

        </div>

      </div>
    );
  }


  const formatCurrency = (amount) => {

    return Number(amount).toLocaleString("en-IN");

  };


  return (

    <div className="min-h-screen bg-slate-50 pt-28 pb-16">

      <div className="max-w-5xl mx-auto px-6">


        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold mb-6 transition"
        >

          <ArrowLeft size={18} />

          Back to Recommendations

        </button>


        {/* Header */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-8 md:p-10 shadow-xl mb-8">

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />

          <div className="relative z-10">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center">

                <Building2 size={32} />

              </div>

              <div>

                <p className="text-blue-100 text-sm font-medium">
                  LoanWise Recommended Bank
                </p>

                <h1 className="text-3xl md:text-4xl font-bold">
                  {bank.bankName}
                </h1>

              </div>

            </div>

          </div>

        </div>


        {/* Bank Information */}

        <div className="grid md:grid-cols-2 gap-6 mb-8">


          {/* Interest Rate */}

          <div className="bg-white rounded-3xl shadow-lg p-7 border border-slate-100">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">

                <Percent
                  size={21}
                  className="text-green-600"
                />

              </div>

              <p className="text-slate-500 font-medium">
                Interest Rate
              </p>

            </div>

            <h2 className="text-3xl font-bold text-green-600">
              {bank.interestRate}%
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Competitive interest rate
            </p>

          </div>


          {/* Processing Fee */}

          <div className="bg-white rounded-3xl shadow-lg p-7 border border-slate-100">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">

                <IndianRupee
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <p className="text-slate-500 font-medium">
                Processing Fee
              </p>

            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              {bank.processingFee}%
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Applicable processing charge
            </p>

          </div>


          {/* Maximum Loan */}

          <div className="bg-white rounded-3xl shadow-lg p-7 border border-slate-100">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center">

                <Building2
                  size={21}
                  className="text-purple-600"
                />

              </div>

              <p className="text-slate-500 font-medium">
                Maximum Loan Amount
              </p>

            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              ₹{formatCurrency(bank.maxLoanAmount)}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Maximum supported loan amount
            </p>

          </div>


          {/* Requested Amount */}

          <div className="bg-white rounded-3xl shadow-lg p-7 border border-slate-100">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center">

                <IndianRupee
                  size={21}
                  className="text-orange-600"
                />

              </div>

              <p className="text-slate-500 font-medium">
                Requested Loan
              </p>

            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              ₹{formatCurrency(loanAmount)}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Your requested loan amount
            </p>

          </div>

        </div>


        {/* Why Recommended */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">

          <div className="flex items-center gap-3 mb-6">

            <ShieldCheck
              size={25}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold text-slate-800">
              Why LoanWise Recommended This Bank
            </h2>

          </div>


          <div className="space-y-4">

            <div className="flex items-start gap-3">

              <CheckCircle2
                size={21}
                className="text-green-600 mt-0.5"
              />

              <p className="text-slate-600">
                The bank supports your requested loan amount.
              </p>

            </div>


            <div className="flex items-start gap-3">

              <CheckCircle2
                size={21}
                className="text-green-600 mt-0.5"
              />

              <p className="text-slate-600">
                The interest rate is competitive compared
                with other available banks.
              </p>

            </div>


            <div className="flex items-start gap-3">

              <CheckCircle2
                size={21}
                className="text-green-600 mt-0.5"
              />

              <p className="text-slate-600">
                The recommendation considers your financial
                profile and loan requirements.
              </p>

            </div>

          </div>

        </div>


        {/* Disclaimer */}

        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">

          <p className="text-sm text-blue-700">

            <strong>Note:</strong> LoanWise provides
            recommendations for comparison purposes.
            Final interest rates, eligibility and approval
            are determined by the respective bank.

          </p>

        </div>

      </div>

    </div>

  );
}

export default BankDetails;