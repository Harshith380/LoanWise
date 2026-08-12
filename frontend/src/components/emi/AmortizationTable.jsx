function AmortizationTable({ schedule }) {
  // Convert monthly schedule into yearly summary
  const yearlySchedule = [];

  for (let i = 0; i < schedule.length; i += 12) {
    const yearData = schedule.slice(i, i + 12);

    const emiPaid = yearData.reduce(
      (sum, item) => sum + Number(item.emi),
      0
    );

    const principalPaid = yearData.reduce(
      (sum, item) => sum + Number(item.principal),
      0
    );

    const interestPaid = yearData.reduce(
      (sum, item) => sum + Number(item.interest),
      0
    );

    const balance =
      yearData.length > 0
        ? Number(yearData[yearData.length - 1].balance)
        : 0;

    yearlySchedule.push({
      year: yearlySchedule.length + 1,
      emiPaid,
      principalPaid,
      interestPaid,
      balance,
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Year-wise Amortization Summary
      </h2>

      {yearlySchedule.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          Calculate EMI to view the amortization summary.
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="min-w-full border border-gray-200">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="border px-4 py-3">Year</th>
                <th className="border px-4 py-3">EMI Paid (₹)</th>
                <th className="border px-4 py-3">Principal Paid (₹)</th>
                <th className="border px-4 py-3">Interest Paid (₹)</th>
                <th className="border px-4 py-3">Balance (₹)</th>
              </tr>

            </thead>

            <tbody>

              {yearlySchedule.map((year) => (

                <tr
                  key={year.year}
                  className="hover:bg-blue-50"
                >

                  <td className="border px-4 py-2 text-center font-semibold">
                    Year {year.year}
                  </td>

                  <td className="border px-4 py-2 text-right">
                    ₹{year.emiPaid.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="border px-4 py-2 text-right">
                    ₹{year.principalPaid.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="border px-4 py-2 text-right">
                    ₹{year.interestPaid.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="border px-4 py-2 text-right">
                    ₹{year.balance.toLocaleString("en-IN", {
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

export default AmortizationTable;