
import { useEffect, useState } from "react";
import axios from "axios";

function FinancialOverview() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverview();
  }, []);

  const fetchOverview = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.get(
        `${API_URL}/api/financial-profile/user/${user.id}`
      );

      const profile = response.data;

      if (!profile) {
        setLoading(false);
        return;
      }

      // Calculate monthly savings
      const savings =
        Number(profile.monthlyIncome || 0) -
        Number(profile.monthlyExpenses || 0);

      // Calculate loan approval probability
      let approvalRate = 50;

      if (Number(profile.creditScore || 0) >= 750) {
        approvalRate += 30;
      } else if (Number(profile.creditScore || 0) >= 650) {
        approvalRate += 15;
      }

      if (Number(profile.monthlyIncome || 0) >= 50000) {
        approvalRate += 15;
      }

      if (
        Number(profile.existingLoan || 0) <=
        Number(profile.monthlyIncome || 0) * 0.3
      ) {
        approvalRate += 5;
      }

      if (approvalRate > 100) {
        approvalRate = 100;
      }

      setOverview({
        monthlyIncome: Number(profile.monthlyIncome || 0),
        monthlyExpenses: Number(profile.monthlyExpenses || 0),
        monthlySavings: savings,
        creditScore: Number(profile.creditScore || 0),
        employmentType: profile.employmentType || "Not specified",
        loanPurpose: profile.loanPurpose || "Not specified",
        existingLoan: Number(profile.existingLoan || 0),
        approvalRate,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching financial overview:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <p className="text-slate-600">
          Loading financial overview...
        </p>
      </div>
    );
  }

  if (!overview) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Financial Overview
        </h2>

        <p className="text-slate-600">
          Complete your financial profile to get financial analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold mb-8">
        Financial Overview
      </h2>

      {/* Loan Approval Probability */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">
            Loan Approval Probability
          </span>

          <span className="text-blue-600 font-bold">
            {overview.approvalRate}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{
              width: `${overview.approvalRate}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Financial Information */}
      <div className="grid md:grid-cols-2 gap-5">

        {/* Credit Score */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Credit Score
          </p>

          <p className="text-green-600 font-bold text-xl">
            {overview.creditScore}
          </p>
        </div>

        {/* Employment */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Employment
          </p>

          <p className="font-bold">
            {overview.employmentType}
          </p>
        </div>

        {/* Monthly Income */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Monthly Income
          </p>

          <p className="text-blue-600 font-bold">
            ₹{overview.monthlyIncome.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Monthly Expenses */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Monthly Expenses
          </p>

          <p className="text-orange-600 font-bold">
            ₹{overview.monthlyExpenses.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Monthly Savings */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Monthly Savings
          </p>

          <p
            className={`font-bold ${
              overview.monthlySavings >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            ₹{overview.monthlySavings.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Existing Loan */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Existing Loan
          </p>

          <p className="text-red-600 font-bold">
            ₹{overview.existingLoan.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Loan Purpose */}
        <div className="border rounded-xl p-5">
          <p className="font-semibold">
            Loan Purpose
          </p>

          <p className="font-bold">
            {overview.loanPurpose}
          </p>
        </div>

      </div>
    </div>
  );
}

export default FinancialOverview;

