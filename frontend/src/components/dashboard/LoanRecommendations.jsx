
import { useEffect, useState } from "react";
import axios from "axios";
import LoanApplicationForm from "../common/LoanApplicationForm";

function LoanRecommendations() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.get(
        `${API_URL}/api/recommendations/${user.id}`
      );

      console.log("Loan recommendations:", response.data);

      setLoans(response.data || []);
    } catch (error) {
      console.error("Error fetching loan recommendations:", error);
      setLoans([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        Loading recommendations...
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Loan Recommendations
        </h2>

        <p className="text-gray-600">
          Complete your financial profile to get personalized loan
          recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold mb-8">
        Recommended Loans
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {loans.map((loan, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              {loan.loanType}
            </h3>

            <div className="space-y-3">
              {/* Maximum Amount */}
              <p>
                <span className="font-semibold">
                  Maximum Amount:
                </span>
                <br />
                ₹{Number(loan.maxAmount || 0).toLocaleString("en-IN")}
              </p>

              {/* Interest Rate */}
              <p>
                <span className="font-semibold">
                  Interest Rate:
                </span>
                <br />
                {loan.interestRate}%
              </p>

              {/* Approval Chance */}
              <p>
                <span className="font-semibold">
                  Approval Chance:
                </span>
                <br />

                <span className="text-green-600 font-bold">
                  {loan.approvalChance}%
                </span>
              </p>

              {/* Match Score */}
              <div className="mt-4">
                <p className="font-semibold">
                  Match Score ⭐
                </p>

                <div className="flex justify-between mt-1">
                  <span>
                    AI Recommendation Match
                  </span>

                  <span className="font-bold text-purple-600">
                    {loan.matchScore}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${loan.matchScore || 0}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Reason */}
              <div className="mt-5 bg-gray-100 rounded-xl p-4">
                <p className="font-semibold">
                  Why Recommended?
                </p>

                <p className="text-gray-600 mt-2">
                  {loan.reason}
                </p>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setSelectedLoan(loan)}
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loan Application Form */}
      {selectedLoan && (
        <div className="mt-10">
          <LoanApplicationForm loan={selectedLoan} />
        </div>
      )}
    </div>
  );
}

export default LoanRecommendations;
