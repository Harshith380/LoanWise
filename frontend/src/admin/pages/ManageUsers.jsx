import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">
        Manage Users
      </h2>

      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="border p-3">ID</th>
              <th className="border p-3">Full Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Credit Score</th>
              <th className="border p-3">Monthly Savings</th>
              <th className="border p-3">Approval Rate</th>
              <th className="border p-3">Role</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td className="border p-3">{user.id}</td>

                <td className="border p-3">
                  {user.fullName}
                </td>

                <td className="border p-3">
                  {user.email}
                </td>

                <td className="border p-3">
                  {user.creditScore}
                </td>

                <td className="border p-3">
                  ₹ {user.monthlySavings?.toLocaleString()}
                </td>

                <td className="border p-3">
                  {user.approvalRate}%
                </td>

                <td className="border p-3 font-semibold">
                  {user.role}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {users.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No users found.
          </div>
        )}

      </div>

    </AdminLayout>
  );
}

export default ManageUsers;