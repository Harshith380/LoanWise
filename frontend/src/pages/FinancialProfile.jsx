import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function FinancialProfile() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    monthlyIncome: "",
    employmentType: "",
    creditScore: "",
    existingLoan: "",
    monthlyExpenses: "",
    age: "",
    loanPurpose: ""

  });


  // Load existing profile
  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
          toast.error("Please login first");
          return;
        }


        const response = await axios.get(
          `http://localhost:8080/api/financial-profile/${user.id}`
        );


        if (response.data) {

          setFormData({

            monthlyIncome: response.data.monthlyIncome || "",
            employmentType: response.data.employmentType || "",
            creditScore: response.data.creditScore || "",
            existingLoan: response.data.existingLoan || "",
            monthlyExpenses: response.data.monthlyExpenses || "",
            age: response.data.age || "",
            loanPurpose: response.data.loanPurpose || ""

          });

        }


      } catch(error) {

        console.log("No existing profile found");

      }

    };


    fetchProfile();

  }, []);



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const user = JSON.parse(localStorage.getItem("user"));


      await axios.post(

        "http://localhost:8080/api/financial-profile",

        {

          ...formData,

          userId: user.id

        }

      );


      toast.success("Financial Profile Saved");


      navigate("/dashboard");


    } catch(error) {

      console.error(error);

      toast.error("Failed to save profile");

    }

  };



  return (

    <div className="min-h-screen bg-gray-100 pt-32 pb-12">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">


        <h1 className="text-3xl font-bold mb-8">

          Complete Financial Profile

        </h1>



        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
        >


          <input
            name="monthlyIncome"
            value={formData.monthlyIncome}
            placeholder="Monthly Income"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          >

            <option value="">
              Select Employment Type
            </option>

            <option value="Salaried">
              Salaried
            </option>

            <option value="Self Employed">
              Self Employed
            </option>

            <option value="Business">
              Business
            </option>

          </select>



          <input
            name="creditScore"
            value={formData.creditScore}
            placeholder="Credit Score"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <input
            name="existingLoan"
            value={formData.existingLoan}
            placeholder="Existing Loan Amount"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <input
            name="monthlyExpenses"
            value={formData.monthlyExpenses}
            placeholder="Monthly Expenses"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <input
            name="age"
            value={formData.age}
            placeholder="Age"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <input
            name="loanPurpose"
            value={formData.loanPurpose}
            placeholder="Loan Purpose"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />



          <button
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >

            Save Profile

          </button>


        </form>


      </div>

    </div>

  );

}


export default FinancialProfile;