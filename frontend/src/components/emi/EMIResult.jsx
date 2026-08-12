function EMIResult({ emi, totalInterest, totalPayment }) {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Loan Summary
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between">
          <span>Monthly EMI</span>
          <span className="font-bold">
            ₹{emi.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total Interest</span>
          <span className="font-bold">
            ₹{totalInterest.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total Payment</span>
          <span className="font-bold">
            ₹{totalPayment.toFixed(2)}
          </span>
        </div>

      </div>

    </div>
  );
}

export default EMIResult;