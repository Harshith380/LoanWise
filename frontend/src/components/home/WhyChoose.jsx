import {
  ShieldCheck,
  BadgePercent,
  Clock3,
  Wallet,
} from "lucide-react";

function WhyChoose() {
  const reasons = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Platform",
      text: "Your financial information is protected using industry-standard security practices.",
    },
    {
      icon: <BadgePercent size={40} />,
      title: "Best Interest Rates",
      text: "Compare offers from multiple lenders to find competitive rates.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Quick Decisions",
      text: "Get instant calculations and recommendations within seconds.",
    },
    {
      icon: <Wallet size={40} />,
      title: "Save More Money",
      text: "Choose smarter loans and reduce your long-term repayment costs.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose LoanWise?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              <div className="text-blue-600 mb-5">
                {reason.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;