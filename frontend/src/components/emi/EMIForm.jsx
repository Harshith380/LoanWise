import { Loader2 } from "lucide-react";

function EMIForm({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTenure,
  setLoanTenure,
  calculateEMI,
  loading,
}) {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Loan Details
      </h2>

      <div className="mb-6">

        <label className="block font-medium mb-2">
          Loan Amount (₹)
        </label>

        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter Loan Amount"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

      </div>

      <div className="mb-6">

        <label className="block font-medium mb-2">
          Interest Rate (%)
        </label>

        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter Interest Rate"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

      </div>

      <div className="mb-6">

        <label className="block font-medium mb-2">
          Loan Tenure (Years)
        </label>

        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Enter Loan Tenure"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

      </div>

      <button
        onClick={calculateEMI}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 flex items-center justify-center gap-2 ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Calculating...
          </>
        ) : (
          "Calculate EMI"
        )}
      </button>

    </div>
  );
}

export default EMIForm;