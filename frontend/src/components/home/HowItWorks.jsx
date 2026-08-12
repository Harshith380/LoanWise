import {
  UserRound,
  Calculator,
  Building2,
  CircleCheckBig,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <UserRound size={40} />,
      title: "Create Profile",
      description:
        "Enter your basic details like income, employment, and credit score.",
    },
    {
      icon: <Calculator size={40} />,
      title: "Calculate EMI",
      description:
        "Estimate your monthly EMI and repayment schedule instantly.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Compare Banks",
      description:
        "Compare loan offers from multiple banks based on interest rates and tenure.",
    },
    {
      icon: <CircleCheckBig size={40} />,
      title: "Choose the Best Loan",
      description:
        "Select the most suitable loan recommendation with confidence.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          How LoanWise Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center p-6 rounded-xl border hover:shadow-lg transition"
            >

              <div className="text-blue-600 flex justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;