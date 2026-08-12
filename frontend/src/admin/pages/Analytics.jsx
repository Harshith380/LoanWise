import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

import AdminLayout from "../components/AdminLayout";
import { getDashboardStats } from "../../services/adminService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    approvedApplications: 0,
    pendingApplications: 0,
    rejectedApplications: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      const data = await getDashboardStats();

      console.log("Analytics data:", data);

      setStats({
        totalUsers: data.totalUsers || 0,
        totalApplications: data.totalApplications || 0,
        approvedApplications: data.approvedApplications || 0,
        pendingApplications: data.pendingApplications || 0,
        rejectedApplications: data.rejectedApplications || 0,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // Bar Chart
  // ==============================

  const barData = {
    labels: [
      "Users",
      "Applications",
      "Approved",
      "Pending",
      "Rejected",
    ],

    datasets: [
      {
        label: "LoanWise Statistics",

        data: [
          stats.totalUsers,
          stats.totalApplications,
          stats.approvedApplications,
          stats.pendingApplications,
          stats.rejectedApplications,
        ],

        backgroundColor: [
          "#2563EB",
          "#9333EA",
          "#16A34A",
          "#EAB308",
          "#DC2626",
        ],

        borderRadius: 6,
      },
    ],
  };

  // ==============================
  // Doughnut Chart
  // ==============================

  const doughnutData = {
    labels: [
      "Approved",
      "Pending",
      "Rejected",
    ],

    datasets: [
      {
        data: [
          stats.approvedApplications,
          stats.pendingApplications,
          stats.rejectedApplications,
        ],

        backgroundColor: [
          "#16A34A",
          "#EAB308",
          "#DC2626",
        ],

        borderWidth: 1,
      },
    ],
  };

  // ==============================
  // Chart Options
  // ==============================

  const barOptions = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <AdminLayout>

      <h2 className="text-3xl font-bold mb-8">
        Analytics
      </h2>

      {loading ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          Loading analytics...
        </div>
      ) : (
        <>
          {/* ==============================
              Statistics Cards
          ============================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Total Users
              </p>

              <h3 className="text-3xl font-bold text-blue-600 mt-2">
                {stats.totalUsers}
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Applications
              </p>

              <h3 className="text-3xl font-bold text-purple-600 mt-2">
                {stats.totalApplications}
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Approved
              </p>

              <h3 className="text-3xl font-bold text-green-600 mt-2">
                {stats.approvedApplications}
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h3 className="text-3xl font-bold text-yellow-600 mt-2">
                {stats.pendingApplications}
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">
                Rejected
              </p>

              <h3 className="text-3xl font-bold text-red-600 mt-2">
                {stats.rejectedApplications}
              </h3>
            </div>

          </div>

          {/* ==============================
              Charts
          ============================== */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Bar Chart */}

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-xl font-semibold mb-6">
                System Statistics
              </h3>

              <Bar
                data={barData}
                options={barOptions}
              />

            </div>

            {/* Doughnut Chart */}

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-xl font-semibold mb-6">
                Loan Status Distribution
              </h3>

              <div className="max-w-md mx-auto">
                <Doughnut
                  data={doughnutData}
                  options={doughnutOptions}
                />
              </div>

            </div>

          </div>
        </>
      )}

    </AdminLayout>
  );
}

export default Analytics;