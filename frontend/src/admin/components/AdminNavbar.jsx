function AdminNavbar() {
  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-2xl font-bold text-blue-700">
          LoanWise Admin
        </h1>

        <p className="text-gray-500 text-sm">
          Loan Management Dashboard
        </p>

      </div>

      <div className="font-semibold text-gray-700">
        Administrator
      </div>

    </header>
  );
}

export default AdminNavbar;