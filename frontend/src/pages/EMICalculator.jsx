import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import EMIForm from "../components/emi/EMIForm";
import EMIResult from "../components/emi/EMIResult";
import EMIChart from "../components/emi/EMIChart";
import AmortizationTable from "../components/emi/AmortizationTable";
import { downloadAmortizationPDF } from "../utils/pdfGenerator";
function EMICalculator() {

  // Logged-in User
  const user = JSON.parse(localStorage.getItem("user"));

  // Input States
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");

  // Result States
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Amortization Schedule
  const [schedule, setSchedule] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(false);

  const calculateEMI = async () => {

  if (!loanAmount || !interestRate || !loanTenure) {
    toast.warning("Please fill all fields");
    return;
  }

  if (!user) {
    toast.error("Please login first");
    return;
  }

  try {

  setLoading(true);

  console.log("Loan Amount:", loanAmount);
  console.log("Interest Rate:", interestRate);
  console.log("Loan Tenure:", loanTenure);

  // Calculate EMI from backend
  const response = await axios.post(
      "http://localhost:8080/api/emi/calculate",
      {
        loanAmount: Number(loanAmount),
        interestRate: Number(interestRate),
        tenure: Number(loanTenure),
      }
    );


    setEmi(response.data.monthlyEMI);
    setTotalInterest(response.data.totalInterest);
    setTotalPayment(response.data.totalAmount);


    // ===============================
    // Generate Amortization Schedule
    // ===============================

    const monthlyRate = Number(interestRate) / (12 * 100);

const totalMonths = Number(loanTenure) * 12;

let balance = Number(loanAmount);

const newSchedule = [];

for (let month = 1; month <= totalMonths; month++) {

      const interest = balance * monthlyRate;

      const principalPaid = response.data.monthlyEMI - interest;

      balance = balance - principalPaid;


      newSchedule.push({

        month: month,

        emi: response.data.monthlyEMI.toFixed(2),

        principal: principalPaid.toFixed(2),

        interest: interest.toFixed(2),

        balance: balance > 0 ? balance.toFixed(2) : "0.00"

      });

    }


    console.log("Schedule Length:", newSchedule.length);
console.log("Generated Schedule:", newSchedule);

setSchedule(newSchedule);


    // Save Loan History
    await axios.post(
      "http://localhost:8080/api/history",
      {
        loanAmount: Number(loanAmount),
        interestRate: Number(interestRate),
        tenure: Number(loanTenure) * 12,
        monthlyEMI: response.data.monthlyEMI,
        totalInterest: response.data.totalInterest,
        totalAmount: response.data.totalAmount,

        user: {
          id: user.id,
        },
      }
    );


    toast.success("EMI calculated successfully!");


  } catch (error) {

    console.error(error);
    toast.error("Failed to calculate EMI");

  } finally {

    setLoading(false);

  }
};
  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          EMI Calculator
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <EMIForm
            loanAmount={loanAmount}
            setLoanAmount={setLoanAmount}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            loanTenure={loanTenure}
            setLoanTenure={setLoanTenure}
            calculateEMI={calculateEMI}
            loading={loading}
          />

          <EMIResult
            emi={emi}
            totalInterest={totalInterest}
            totalPayment={totalPayment}
          />

        </div>

        <div className="mt-10">

          <EMIChart
            loanAmount={loanAmount}
            totalInterest={totalInterest}
          />

        </div>

        <div className="mt-10">

  <AmortizationTable
    schedule={schedule}
  />

  {schedule.length > 0 && (
    <div className="mt-6 flex justify-end">

      <button
        onClick={() =>
          downloadAmortizationPDF({
            loanAmount,
            interestRate,
            loanTenure,
            emi,
            totalInterest,
            totalPayment,
            schedule,
          })
        }
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        📄 Download Full Amortization Report
      </button>

    </div>
  )}

</div>
      </div>

    </div>
  );
}

export default EMICalculator;