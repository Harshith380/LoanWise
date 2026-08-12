import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  LogOut,
} from "lucide-react";

function AdminSidebar() {

  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users size={20} />,
    },
    {
      name: "Applications",
      path: "/admin/applications",
      icon: <FileText size={20} />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <BarChart3 size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen flex flex-col">

      <div className="p-6 border-b border-blue-600">
        <h1 className="text-2xl font-bold">
          LoanWise
        </h1>

        <p className="text-blue-200 text-sm">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 mt-4">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition ${
                isActive
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>

        ))}

      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-6 hover:bg-red-600 transition"
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}

export default AdminSidebar;