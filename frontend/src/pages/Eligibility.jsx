import { useState } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import EligibilityForm from "../components/Eligibility/EligibilityForm";
import EligibilityResult from "../components/Eligibility/EligibilityResult";

function Eligibility() {

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-10">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-8 md:p-10 shadow-xl">

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />

          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-white/5 rounded-full" />

          <div className="relative z-10">

            <div className="flex items-center gap-2 mb-4">

              <div className="bg-white/15 p-2 rounded-xl">
                <Sparkles size={20} />
              </div>

              <span className="text-blue-100 font-medium">
                LoanWise Smart Eligibility
              </span>

            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Check Your Loan Eligibility
            </h1>

            <p className="text-blue-100 max-w-2xl text-base md:text-lg">
              Enter your financial and loan details to check your
              eligibility and discover suitable banks.
            </p>

            <div className="flex items-center gap-2 mt-5 text-sm text-blue-100">

              <ShieldCheck size={18} />

              <span>
                Secure and simple loan assessment
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          <EligibilityForm
            setResult={setResult}
          />

          <EligibilityResult
            result={result}
          />

        </div>

      </div>

    </div>
  );
}

export default Eligibility;
