function DashboardHeader() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8 shadow-lg mb-8">

      <h1 className="text-4xl font-bold mb-3">
        Welcome Back, {user?.fullName || "User"} 👋
      </h1>

      <p className="text-blue-100 text-lg">
        Manage your loans, compare banks, calculate EMI and track your financial journey — all in one place.
      </p>

    </div>
  );
}

export default DashboardHeader;