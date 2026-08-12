function FAQ() {

  const faqs = [
    {
      question: "Is LoanWise free to use?",
      answer: "Yes. LoanWise is completely free for users."
    },
    {
      question: "Can I compare different banks?",
      answer: "Yes. Compare multiple banks based on interest rate, EMI, and tenure."
    },
    {
      question: "Does LoanWise provide loans?",
      answer: "No. LoanWise only helps you compare and choose suitable loan options."
    },
    {
      question: "Is my information secure?",
      answer: "Yes. We prioritize the security of your financial information."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="bg-white rounded-lg p-6 mb-5 shadow"
          >

            <h3 className="font-semibold text-xl">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;