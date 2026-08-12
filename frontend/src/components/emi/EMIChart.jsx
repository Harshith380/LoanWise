import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function EMIChart({ loanAmount, totalInterest }) {

  const data = {
    labels: ["Principal", "Interest"],

    datasets: [
      {
        data: [
          Number(loanAmount),
          Number(totalInterest),
        ],

        backgroundColor: [
          "#2563eb",
          "#22c55e",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Payment Distribution
      </h2>

      <div className="max-w-md mx-auto">

        <Pie data={data} />

      </div>

    </div>
  );
}

export default EMIChart;