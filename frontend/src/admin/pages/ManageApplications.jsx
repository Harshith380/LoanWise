import { useEffect, useState } from "react";
import { toast } from "sonner";
import AdminLayout from "../components/AdminLayout";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../../services/adminService";

function ManageApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const response = await getAllApplications();

      console.log("Applications response:", response);

      // Handle different possible response formats
      let data = response;

      // If adminService returns Axios response
      if (response?.data !== undefined) {
        data = response.data;
      }

      // If backend returns { applications: [...] }
      if (data?.applications && Array.isArray(data.applications)) {
        data = data.applications;
      }

      // If backend returns { content: [...] }
      if (data?.content && Array.isArray(data.content)) {
        data = data.content;
      }

      // Make absolutely sure applications is an array
      if (Array.isArray(data)) {
        setApplications(data);
      } else {
        console.error(
          "Unexpected applications response format:",
          data
        );
        setApplications([]);
        toast.error("Invalid applications data received");
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      setApplications([]);
      toast.error("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);

      toast.success(
        `Application ${status.toLowerCase()} successfully`
      );

      // Reload applications after update
      await fetchApplications();
    } catch (error) {
      console.error("Error updating application:", error);

      toast.error("Failed to update application");
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">
        Manage Applications
      </h2>

      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading applications...
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No loan applications found.
          </div>
        ) : (
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100">

                <th className="p-3 border">
                  ID
                </th>

                <th className="p-3 border">
                  User ID
                </th>

                <th className="p-3 border">
                  Loan Type
                </th>

                <th className="p-3 border">
                  Amount
                </th>

                <th className="p-3 border">
                  Applied Date
                </th>

                <th className="p-3 border">
                  Status
                </th>

                <th className="p-3 border">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-gray-50"
                >

                  <td className="border p-3 text-center">
                    {app.id}
                  </td>

                  <td className="border p-3 text-center">
                    {app.userId}
                  </td>

                  <td className="border p-3">
                    {app.loanType}
                  </td>

                  <td className="border p-3">
                    ₹{" "}
                    {app.loanAmount != null
                      ? Number(app.loanAmount).toLocaleString("en-IN")
                      : "0"}
                  </td>

                  <td className="border p-3">
                    {app.appliedDate || "-"}
                  </td>

                  <td className="border p-3 text-center font-semibold">

                    <span
                      className={
                        app.status === "APPROVED"
                          ? "text-green-600"
                          : app.status === "REJECTED"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }
                    >
                      {app.status}
                    </span>

                  </td>

                  <td className="border p-3">

                    {app.status === "PENDING" ? (
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            updateStatus(
                              app.id,
                              "APPROVED"
                            )
                          }
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(
                              app.id,
                              "REJECTED"
                            )
                          }
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                        >
                          Reject
                        </button>

                      </div>
                    ) : (
                      <span className="text-gray-500">
                        Completed
                      </span>
                    )}

                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        )}

      </div>
    </AdminLayout>
  );
}

export default ManageApplications;