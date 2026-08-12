import {
  Calculator,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Calculator,
      title: "Smart EMI Calculator",
      description:
        "Calculate monthly EMI, total repayment, and interest instantly with accurate results.",
    },
    {
      icon: Building2,
      title: "Compare Banks",
      description:
        "Compare loan offers from multiple banks and choose the most affordable option.",
    },
    {
      icon: ShieldCheck,
      title: "Eligibility Checker",
      description:
        "Know your eligibility before applying using salary and credit score analysis.",
    },
    {
      icon: TrendingUp,
      title: "Smart Recommendations",
      description:
        "Receive personalized loan recommendations based on your financial profile.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Everything You Need
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            LoanWise combines powerful financial tools into one simple,
            secure, and intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">

                  <Icon
                    size={32}
                    className="text-blue-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;