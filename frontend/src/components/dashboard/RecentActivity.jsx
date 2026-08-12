import { useEffect, useState } from "react";
import axios from "axios";
import { Calculator } from "lucide-react";

function RecentActivity() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {

     const user = JSON.parse(localStorage.getItem("user"));

if (!user) return;

const response = await axios.get(
  `http://localhost:8080/api/history/user/${user.id}`
);
      const recent = response.data
        .slice()
        .reverse()
        .slice(0, 5);

      setActivities(recent);

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

      <h2 className="text-3xl font-bold mb-8">
        Recent Activity
      </h2>

      {activities.length === 0 ? (

        <p className="text-gray-500">
          No recent activity found.
        </p>

      ) : (

        <div className="space-y-6">

          {activities.map((loan) => (

            <div
              key={loan.id}
              className="flex items-center gap-5 border-b pb-5 last:border-none"
            >

              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <Calculator size={20} />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-lg">
                  EMI Calculated
                </h3>

                <p className="text-gray-500">
                  ₹{loan.loanAmount.toLocaleString()} Loan • EMI ₹
                  {loan.monthlyEMI.toFixed(2)}
                </p>

              </div>

              <span className="text-sm text-gray-400">
                {loan.tenure} Years
              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default RecentActivity;