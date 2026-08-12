import { Link } from "react-router-dom";
import {
  Calculator,
  Building2,
  ShieldCheck,
  Settings,
} from "lucide-react";

function QuickActions() {

  const actions = [
    {
      title: "EMI Calculator",
      icon: <Calculator size={30} />,
      color: "bg-blue-600",
      link: "/emi",
    },
    {
      title: "Compare Loans",
      icon: <Building2 size={30} />,
      color: "bg-green-600",
      link: "/compare",
    },
    {
      title: "Eligibility",
      icon: <ShieldCheck size={30} />,
      color: "bg-purple-600",
      link: "/eligibility",
    },
    {
      title: "Settings",
      icon: <Settings size={30} />,
      color: "bg-orange-500",
      link: "/settings",
    },
  ];

  return (
    <div className="mb-10">

      <h2 className="text-3xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {actions.map((action, index) => (

          <Link
            key={index}
            to={action.link}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >

            <div
              className={`${action.color} w-14 h-14 rounded-xl text-white flex items-center justify-center mb-4`}
            >
              {action.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {action.title}
            </h3>

            <p className="text-gray-500 mt-2">
              Open {action.title}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;