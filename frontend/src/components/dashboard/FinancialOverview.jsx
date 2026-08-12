import { useEffect, useState } from "react";
import axios from "axios";

function FinancialOverview() {

  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchOverview();

  }, []);



  const fetchOverview = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));


      if (!user) {

        setLoading(false);
        return;

      }


     const response = await axios.get(
  `http://localhost:8080/api/financial-profile/user/${user.id}`
);

      const profile = response.data;



      if (!profile) {

        setLoading(false);
        return;

      }



      // Calculate savings

      const savings =
        profile.monthlyIncome -
        profile.monthlyExpenses;



      // Simple approval calculation

      let approvalRate = 50;


      if(profile.creditScore >= 750)
        approvalRate += 30;

      else if(profile.creditScore >= 650)
        approvalRate += 15;



      if(profile.monthlyIncome >= 50000)
        approvalRate += 15;



      if(profile.existingLoan <= profile.monthlyIncome * 0.3)
        approvalRate += 5;



      if(approvalRate > 100)
        approvalRate = 100;



      setOverview({

        monthlyIncome: profile.monthlyIncome,

        monthlyExpenses: profile.monthlyExpenses,

        monthlySavings: savings,

        creditScore: profile.creditScore,

        employmentType: profile.employmentType,

        loanPurpose: profile.loanPurpose,

        existingLoan: profile.existingLoan,

        approvalRate

      });


      setLoading(false);



    } catch(error) {

      console.error(error);

      setLoading(false);

    }

  };





  if(loading){

    return(

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

        Loading financial overview...

      </div>

    );

  }





  if(!overview){

    return(

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">


        <h2 className="text-3xl font-bold mb-4">

          Financial Overview

        </h2>


        <p className="text-slate-600">

          Complete your financial profile to get financial analysis.

        </p>


      </div>

    );

  }





  return (

    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">


      <h2 className="text-3xl font-bold mb-8">

        Financial Overview

      </h2>



      {/* Approval */}

      <div className="mb-8">

        <div className="flex justify-between mb-2">

          <span className="font-semibold">

            Loan Approval Probability

          </span>


          <span className="text-blue-600 font-bold">

            {overview.approvalRate}%

          </span>


        </div>


        <div className="w-full bg-gray-200 rounded-full h-4">

          <div

            className="bg-blue-600 h-4 rounded-full"

            style={{
              width:`${overview.approvalRate}%`
            }}

          ></div>


        </div>

      </div>





      <div className="grid md:grid-cols-2 gap-5">



        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Credit Score

          </p>

          <p className="text-green-600 font-bold text-xl">

            {overview.creditScore}

          </p>

        </div>





        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Employment

          </p>

          <p className="font-bold">

            {overview.employmentType}

          </p>

        </div>





        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Monthly Income

          </p>

          <p className="text-blue-600 font-bold">

            ₹{overview.monthlyIncome.toLocaleString()}

          </p>

        </div>





        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Monthly Savings

          </p>

          <p className="text-green-600 font-bold">

            ₹{overview.monthlySavings.toLocaleString()}

          </p>

        </div>





        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Existing Loan

          </p>

          <p className="text-red-600 font-bold">

            ₹{overview.existingLoan.toLocaleString()}

          </p>

        </div>





        <div className="border rounded-xl p-5">

          <p className="font-semibold">

            Loan Purpose

          </p>

          <p className="font-bold">

            {overview.loanPurpose}

          </p>

        </div>



      </div>



    </div>

  );

}


export default FinancialOverview;