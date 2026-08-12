function ComparisonTable({ loans }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Loan Comparison
      </h2>

      {loans.length === 0 ? (

        <p className="text-gray-500 text-center py-8">
          No loan offers added yet.
        </p>

      ) : (

        <div className="overflow-x-auto">

          <table className="min-w-full border border-gray-200">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="px-4 py-3 border">Bank</th>
                <th className="px-4 py-3 border">Loan Amount</th>
                <th className="px-4 py-3 border">Interest</th>
                <th className="px-4 py-3 border">Years</th>
                <th className="px-4 py-3 border">Monthly EMI</th>
                <th className="px-4 py-3 border">Interest Paid</th>
                <th className="px-4 py-3 border">Total Payment</th>

              </tr>

            </thead>

            <tbody>

              {loans.map((loan, index) => (

                <tr
                  key={loan.id}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-blue-50"
                      : "bg-gray-50 hover:bg-blue-50"
                  }
                >

                  <td className="border px-4 py-3 font-semibold">
                    {loan.bankName}
                  </td>

                  <td className="border px-4 py-3 text-right">
                    ₹{loan.loanAmount.toLocaleString("en-IN")}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {loan.interestRate}%
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {loan.loanTenure}
                  </td>

                  <td className="border px-4 py-3 text-right">
                    ₹{loan.emi.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="border px-4 py-3 text-right">
                    ₹{loan.totalInterest.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="border px-4 py-3 text-right">
                    ₹{loan.totalPayment.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default ComparisonTable;