import { useEffect, useState } from "react";
import axios from "axios";
import {
  Calculator,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function StatsCards() {

  const [stats, setStats] = useState({
    emiCalculations: 0,
    totalLoanAmount: 0,
    averageEMI: 0,
    approvalRate: "0%",
  });


  useEffect(() => {
    fetchStats();
  }, []);


  const fetchStats = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return;


      const response = await axios.get(
        `http://localhost:8080/api/history/user/${user.id}`
      );


      const loans = response.data;


      const emiCalculations = loans.length;


      const totalLoanAmount = loans.reduce(
        (sum, loan) => sum + loan.loanAmount,
        0
      );


      const averageEMI =
        loans.length > 0
          ? loans.reduce(
              (sum, loan) => sum + loan.monthlyEMI,
              0
            ) / loans.length
          : 0;


      setStats({
        emiCalculations,
        totalLoanAmount,
        averageEMI,
        approvalRate: loans.length > 0 ? "85%" : "0%",
      });


    } catch (error) {
      console.error("Stats error:", error);
    }
  };



  const cards = [
    {
      title: "EMI Calculations",
      value: stats.emiCalculations,
      icon: <Calculator size={32} />,
      color: "bg-blue-600",
    },
    {
      title: "Total Loan Amount",
      value: `₹ ${stats.totalLoanAmount.toLocaleString()}`,
      icon: <Building2 size={32} />,
      color: "bg-green-600",
    },
    {
      title: "Average EMI",
      value: `₹ ${stats.averageEMI.toFixed(2)}`,
      icon: <ShieldCheck size={32} />,
      color: "bg-purple-600",
    },
    {
      title: "Approval Rate",
      value: stats.approvalRate,
      icon: <TrendingUp size={32} />,
      color: "bg-orange-500",
    },
  ];


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>


            <div className={`${item.color} text-white p-4 rounded-xl`}>
              {item.icon}
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}


export default StatsCards;