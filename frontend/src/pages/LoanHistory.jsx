import { useEffect, useState } from "react";
import axios from "axios";
import { Clock, Trash2 } from "lucide-react";
import { toast } from "sonner";

function LoanHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) return;

      const API_URL =
        import.meta.env.VITE_API_URL;

      const response = await axios.get(
        `${API_URL}/api/history/user/${user.id}`
      );

      setHistory(response.data || []);
    } catch (error) {
      console.error(
        "Error loading loan history:",
        error
      );

      toast.error(
        "Failed to load loan history"
      );
    }
  };

  const deleteLoan = async (id) => {
    try {
      const API_URL =
        import.meta.env.VITE_API_URL;

      await axios.delete(
        `${API_URL}/api/history/${id}`
      );

      toast.success(
        "Loan deleted successfully"
      );

      fetchHistory();
    } catch (error) {
      console.error(
        "Error deleting loan:",
        error
      );

      toast.error("Delete failed");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-10">
          <Clock
            className="text-blue-600"
            size={34}
          />

          <h1 className="text-4xl font-bold">
            Loan History
          </h1>
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Loan History Found
            </h2>

            <p className="text-gray-500 mt-3">
              Calculate an EMI first to save loan
              history.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6"
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      ₹{" "}
                      {Number(
                        item.loanAmount || 0
                      ).toLocaleString("en-IN")}
                    </h2>

                    <p className="mt-2 text-gray-600">
                      <strong>
                        Interest Rate:
                      </strong>{" "}
                      {item.interestRate}%
                    </p>

                    <p className="text-gray-600">
                      <strong>
                        Tenure:
                      </strong>{" "}
                      {item.tenure} Months
                    </p>

                    <p className="text-gray-600">
                      <strong>
                        Monthly EMI:
                      </strong>{" "}
                      ₹{" "}
                      {Number(
                        item.monthlyEMI || 0
                      ).toFixed(2)}
                    </p>

                    <p className="text-gray-600">
                      <strong>
                        Total Interest:
                      </strong>{" "}
                      ₹{" "}
                      {Number(
                        item.totalInterest || 0
                      ).toFixed(2)}
                    </p>

                    <p className="text-gray-600">
                      <strong>
                        Total Amount:
                      </strong>{" "}
                      ₹{" "}
                      {Number(
                        item.totalAmount || 0
                      ).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deleteLoan(item.id)
                    }
                    className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-xl transition"
                    title="Delete loan"
                  >
                    <Trash2 size={22} />
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default LoanHistory;