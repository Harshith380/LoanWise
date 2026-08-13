import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function ComparisonForm({ loans, setLoans }) {
  const [bankName, setBankName] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [loading, setLoading] = useState(false);

  const addLoan = async () => {
    if (!bankName || !loanAmount || !interestRate || !loanTenure) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/loan/compare`,
        {
          loanAmount: Number(loanAmount),
          interestRate: Number(interestRate),
          tenure: Number(loanTenure),
        }
      );

      const newLoan = {
        id: Date.now(),
        bankName,
        loanAmount: Number(loanAmount),
        interestRate: Number(interestRate),
        loanTenure: Number(loanTenure),
        emi: response.data.monthlyEMI,
        totalInterest: response.data.totalInterest,
        totalPayment: response.data.totalAmount,
      };

      setLoans([...loans, newLoan]);

      setBankName("");
      setLoanAmount("");
      setInterestRate("");
      setLoanTenure("");

      toast.success("Loan added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to compare loan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-8">
        Add Loan Offer
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">
            Bank Name
          </label>

          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="SBI"
            disabled={loading}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Loan Amount
          </label>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="1000000"
            disabled={loading}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Interest Rate (%)
          </label>

          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="8.5"
            disabled={loading}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Loan Tenure (Years)
          </label>

          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="5"
            disabled={loading}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={addLoan}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition duration-300 ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Comparing...
          </>
        ) : (
          "Add Loan"
        )}
      </button>
    </div>
  );
}

export default ComparisonForm;