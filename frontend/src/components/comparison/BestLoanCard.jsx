function BestLoanCard({ loans }) {

  if (loans.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-4">
          Best Loan Recommendation
        </h2>

        <p className="text-gray-500">
          Add loan offers to see the recommendation.
        </p>

      </div>
    );
  }

  const bestLoan = loans.reduce((best, current) =>
    current.emi < best.emi ? current : best
  );

  return (
    <div className="bg-green-50 border border-green-300 rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🏆 Best Loan Recommendation
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <p className="text-gray-600">
            Bank
          </p>

          <h3 className="text-2xl font-bold">
            {bestLoan.bankName}
          </h3>

        </div>

        <div>

          <p className="text-gray-600">
            Monthly EMI
          </p>

          <h3 className="text-2xl font-bold text-green-700">
            ₹{bestLoan.emi.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </h3>

        </div>

        <div>

          <p className="text-gray-600">
            Interest Rate
          </p>

          <h3 className="text-xl font-semibold">
            {bestLoan.interestRate}%
          </h3>

        </div>

        <div>

          <p className="text-gray-600">
            Total Payment
          </p>

          <h3 className="text-xl font-semibold">
            ₹{bestLoan.totalPayment.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default BestLoanCard;