import { useEffect, useState } from "react";
import axios from "axios";

console.log("MyApplications loaded");

function MyApplications() {
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

      const response = await axios.get(
        `http://localhost:8080/api/applications/user/${user.id}`
      );

      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold">My Applications</h2>
        <p className="mt-4 text-gray-600">Loading applications...</p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold mb-3">
          My Applications
        </h2>

        <p className="text-gray-600">
          You haven't applied for any loans yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8">
        My Loan Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left px-4 py-3">Loan Type</th>
              <th className="text-left px-4 py-3">Amount</th>
              <th className="text-left px-4 py-3">Applied Date</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={application.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-4 font-medium">
                  {application.loanType}
                </td>

                <td className="px-4 py-4">
                  ₹{application.loanAmount.toLocaleString()}
                </td>

                <td className="px-4 py-4">
                  {application.appliedDate}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      application.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : application.status === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {application.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyApplications;
