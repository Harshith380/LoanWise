import React from "react";

const features = [
  ["🔐","Secure Authentication","Safe login and registration using Spring Security & JWT."],
  ["💰","EMI Calculator","Instant EMI, interest and repayment calculations."],
  ["📊","Eligibility Check","Estimate loan eligibility in seconds."],
  ["🤖","Smart Recommendations","Personalized loan suggestions from your financial profile."],
  ["📝","Loan Management","Apply for and track loan applications."],
  ["👨‍💼","Admin Dashboard","Manage users, applications and analytics."]
];

const tech = {
  Frontend:["React","Vite","Tailwind CSS","Axios","React Router","Chart.js"],
  Backend:["Spring Boot","Spring Security","Hibernate","Spring Data JPA","JWT"],
  Database:["MySQL"],
  Tools:["Git","GitHub","Postman","VS Code","Maven"]
};

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Smart Loan Recommendation Platform</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
              About <span className="text-blue-600">LoanWise</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              LoanWise is a modern full-stack web application that helps users calculate EMIs,
              check loan eligibility, receive intelligent loan recommendations, apply for loans,
              and track applications through a secure and intuitive platform.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Why LoanWise?</h2>
            <ul className="space-y-3 text-lg">
              <li>✅ Intelligent Recommendations</li>
              <li>📊 EMI & Eligibility Analysis</li>
              <li>🔐 Secure Authentication</li>
              <li>👨‍💼 Admin Management</li>
              <li>📈 Analytics Dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">🎯 Mission</h3>
          <p className="text-gray-600 leading-7">
            Make loan decisions simpler with transparent calculations, eligibility analysis,
            and personalized recommendations.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">🚀 Vision</h3>
          <p className="text-gray-600 leading-7">
            Build a secure digital platform that empowers users and administrators with
            efficient loan management tools.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(([i,t,d])=>(
            <div key={t} className="bg-white rounded-2xl shadow p-6 hover:-translate-y-1 transition">
              <div className="text-4xl">{i}</div>
              <h3 className="font-bold text-xl mt-4">{t}</h3>
              <p className="text-gray-600 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold text-center mb-10">Built With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(tech).map(([k,v])=>(
            <div key={k} className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-xl text-blue-600 mb-4">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {v.map(x=><span key={x} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{x}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-10 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Developed by</h2>
          <p className="text-2xl font-semibold">K. Naga Harshith</p>
          <p className="mt-2 text-blue-100">B.Tech - Computer Science & Engineering</p>
          <p className="mt-6 text-lg">
            LoanWise demonstrates full-stack development using React, Spring Boot and MySQL,
            focusing on practical financial tools and a complete admin management system.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;