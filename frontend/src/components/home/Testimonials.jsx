import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      review:
        "LoanWise helped me compare multiple banks and saved me thousands in interest.",
    },
    {
      name: "Priya Verma",
      role: "Business Owner",
      review:
        "The EMI calculator and loan comparison tools are simple, accurate, and easy to use.",
    },
    {
      name: "Amit Kumar",
      role: "Government Employee",
      review:
        "I found the best home loan within minutes. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >

              <div className="flex text-yellow-500 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;