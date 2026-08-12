import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  getDashboardStats,
  getAllApplications,
} from "../../services/adminService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    approvedApplications: 0,
    pendingApplications: 0,
    rejectedApplications: 0,
  });

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const [statsData, applicationsData] = await Promise.all([
        getDashboardStats(),
        getAllApplications(),
      ]);

      setStats({
        totalUsers: statsData.totalUsers || 0,
        totalApplications: statsData.totalApplications || 0,
        approvedApplications:
          statsData.approvedApplications || 0,
        pendingApplications:
          statsData.pendingApplications || 0,
        rejectedApplications:
          statsData.rejectedApplications || 0,
      });

      let data = applicationsData;

      if (applicationsData?.applications) {
        data = applicationsData.applications;
      } else if (applicationsData?.content) {
        data = applicationsData.content;
      }

      if (Array.isArray(data)) {
        setApplications(data);
      } else {
        setApplications([]);
      }
    } catch (error) {
      console.error("Error loading dashboard:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  // Show latest applications first
  const recentApplications = [...applications]
    .sort((a, b) => {
      const dateA = new Date(a.appliedDate || 0);
      const dateB = new Date(b.appliedDate || 0);

      return dateB - dateA;
    })
    .slice(0, 5);

  const getStatusClass = (status) => {
    if (status === "APPROVED") {
      return "bg-green-100 text-green-700";
    }

    if (status === "REJECTED") {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <AdminLayout>

      {/* Page Title */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Overview of LoanWise system activity
        </p>
      </div>


      {/* Statistics Cards */}

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading dashboard...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">

            {/* Total Users */}

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Total Users
              </p>

              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                {stats.totalUsers}
              </h2>
            </div>


            {/* Applications */}

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Applications
              </p>

              <h2 className="text-3xl font-bold text-purple-600 mt-2">
                {stats.totalApplications}
              </h2>
            </div>


            {/* Approved */}

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Approved
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {stats.approvedApplications}
              </h2>
            </div>


            {/* Pending */}

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                {stats.pendingApplications}
              </h2>
            </div>


            {/* Rejected */}

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Rejected
              </p>

              <h2 className="text-3xl font-bold text-red-600 mt-2">
                {stats.rejectedApplications}
              </h2>
            </div>

          </div>


          {/* Recent Applications */}

          <div className="bg-white rounded-xl shadow p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-semibold">
                  Recent Applications
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Latest loan applications submitted
                </p>
              </div>

              <a
                href="/admin/applications"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All
              </a>

            </div>


            {recentApplications.length === 0 ? (

              <div className="text-center py-8 text-gray-500">
                No loan applications found.
              </div>

            ) : (

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-gray-100">

                      <th className="p-3 border text-left">
                        ID
                      </th>

                      <th className="p-3 border text-left">
                        User ID
                      </th>

                      <th className="p-3 border text-left">
                        Loan Type
                      </th>

                      <th className="p-3 border text-left">
                        Amount
                      </th>

                      <th className="p-3 border text-left">
                        Applied Date
                      </th>

                      <th className="p-3 border text-center">
                        Status
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {recentApplications.map((app) => (

                      <tr
                        key={app.id}
                        className="hover:bg-gray-50"
                      >

                        <td className="p-3 border">
                          {app.id}
                        </td>

                        <td className="p-3 border">
                          {app.userId}
                        </td>

                        <td className="p-3 border">
                          {app.loanType || "-"}
                        </td>

                        <td className="p-3 border">
                          ₹{" "}
                          {app.loanAmount != null
                            ? Number(
                                app.loanAmount
                              ).toLocaleString("en-IN")
                            : "0"}
                        </td>

                        <td className="p-3 border">
                          {app.appliedDate || "-"}
                        </td>

                        <td className="p-3 border text-center">

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                              app.status
                            )}`}
                          >
                            {app.status}
                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </>
      )}

    </AdminLayout>
  );
}

export default AdminDashboard;