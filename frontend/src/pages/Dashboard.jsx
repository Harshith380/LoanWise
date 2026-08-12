import { Link } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";
import FinancialOverview from "../components/dashboard/FinancialOverview";
import LoanRecommendations from "../components/dashboard/LoanRecommendations";
import LoanApplicationHistory from "../components/dashboard/LoanApplicationHistory";
import MyApplications from "../components/dashboard/MyApplications";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-7xl mx-auto px-6">

        <DashboardHeader />

        <StatsCards />

        <QuickActions />

        <RecentActivity />

       <LoanRecommendations />

<LoanApplicationHistory />

<MyApplications />


        {/* Financial Profile Reminder */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Complete Your Financial Profile
          </h2>

          <p className="text-slate-600 mb-5">
            Add your income, credit score and loan details
            to receive personalized loan recommendations.
          </p>


          <Link
            to="/financial-profile"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Complete Now
          </Link>


        </div>


        <FinancialOverview />


      </div>

    </div>
  );
}

export default Dashboard;