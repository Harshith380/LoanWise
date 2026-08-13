
import { useEffect, useState } from "react";
import axios from "axios";

function LoanApplicationHistory() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.get(
        `${API_URL}/api/applications/user/${user.id}`
      );

      setApplications(response.data || []);
    } catch (error) {
      console.error("Error fetching loan applications:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
        <p className="text-gray-600">
          Loading applications...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
      <h2 className="text-3xl font-bold mb-6">
        My Loan Applications
      </h2>

      {applications.length === 0 ? (
        <p className="text-gray-500">
          No loan applications found.
        </p>
      ) : (
        <div className="space-y-5">
          {applications.map((app) => (
            <div
              key={app.id}
              className="border rounded-xl p-5"
            >
              <h3 className="text-xl font-bold text-blue-600">
                {app.loanType}
              </h3>

              <p className="mt-2">
                <strong>Requested Amount:</strong>{" "}
                ₹{Number(app.loanAmount || 0).toLocaleString("en-IN")}
              </p>

              <p>
                <strong>Tenure:</strong>{" "}
                {app.tenure} Years
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-bold ${
                    app.status === "APPROVED"
                      ? "text-green-600"
                      : app.status === "REJECTED"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {app.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoanApplicationHistory;

