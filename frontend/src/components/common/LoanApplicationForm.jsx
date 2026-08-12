import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


function LoanApplicationForm({ loan }) {


  const navigate = useNavigate();


  const [loanAmount, setLoanAmount] = useState("");



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      await axios.post(
        "http://localhost:8080/api/applications",
        {
          userId: user.id,
          loanType: loan.loanType,
          loanAmount: loanAmount
        }
      );


      toast.success("Loan Application Submitted");


      navigate("/dashboard");


    } catch(error) {

      console.error(error);

      toast.error("Application Failed");

    }

  };



  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg">


      <h2 className="text-2xl font-bold mb-5">
        Apply For {loan.loanType}
      </h2>



      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
      >


        <input

          value={loanAmount}

          onChange={(e)=>
            setLoanAmount(e.target.value)
          }

          placeholder="Enter Loan Amount"

          className="border p-3 rounded-xl"

        />



        <button

          className="bg-blue-600 text-white p-3 rounded-xl"

        >

          Submit Application

        </button>


      </form>


    </div>

  );

}


export default LoanApplicationForm;