import { useState } from "react";

import ComparisonForm from "../components/comparison/ComparisonForm";
import ComparisonTable from "../components/comparison/ComparisonTable";
import BestLoanCard from "../components/comparison/BestLoanCard";

function LoanComparison() {

  const [loans, setLoans] = useState([]);

  return (

    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">

          Compare Loan Offers

        </h1>

        <ComparisonForm
          loans={loans}
          setLoans={setLoans}
        />

        <div className="mt-10">

          <ComparisonTable loans={loans} />

        </div>

        <div className="mt-10">

          <BestLoanCard loans={loans} />

        </div>

      </div>

    </div>

  );

}

export default LoanComparison;