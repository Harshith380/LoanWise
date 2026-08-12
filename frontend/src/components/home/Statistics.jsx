function Statistics() {

  const stats = [
    {
      number: "25+",
      title: "Partner Banks",
    },
    {
      number: "10K+",
      title: "EMI Calculations",
    },
    {
      number: "98%",
      title: "Recommendation Accuracy",
    },
    {
      number: "24/7",
      title: "Availability",
    },
  ];

  return (

    <section className="bg-blue-600 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (

            <div key={index}>

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-blue-100 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Statistics;