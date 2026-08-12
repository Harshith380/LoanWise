import logo from "../../assets/loanwise-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Bell,
  ChevronDown,
  User,
  LayoutDashboard,
  History,
  Settings,
  LogOut,
  Menu,
  X,

} from "lucide-react";
import { toast } from "sonner";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/login");
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "EMI Calculator",
      path: "/emi",
    },
    {
      name: "Compare",
      path: "/compare",
    },
    {
      name: "Eligibility",
      path: "/eligibility",
    },
    {
  name: "Dashboard",
  path: user?.role === "ADMIN"
    ? "/admin/dashboard"
    : "/dashboard",
},
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

      {/* Logo */}

<Link
  to="/"
  className="flex items-center gap-4"
>

  <img
    src={logo}
    alt="LoanWise Logo"
    className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
  />

  <div>

    <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">
      LoanWise
    </h1>

    <p className="text-xs text-slate-500 tracking-wide">
      Smart Loan Platform
    </p>

  </div>

</Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>

            ))}

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-5">

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                {/* Notification */}

                <button className="relative">

                  <Bell
                    size={23}
                    className="text-slate-600 hover:text-blue-600 transition"
                  />

                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>

                </button>

                {/* User */}

                <div
                  className="relative"
                  ref={dropdownRef}
                >

                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-2xl transition"
                  >

                    <div className="relative">

                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold">

  {user?.fullName?.charAt(0)?.toUpperCase()}

</div>

                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>

                    </div>

                    <div className="text-left">

                      <h3 className="font-semibold">
  {user?.fullName || "User"}
</h3>

                      <p className="text-xs text-slate-500">
                        Welcome Back
                      </p>

                    </div>

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {open && (

                    <div className="absolute right-0 mt-5 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

                      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-6 text-white">

                        <div className="flex items-center gap-4">

                          <div className="w-16 h-16 rounded-full bg-white text-blue-700 flex items-center justify-center text-3xl font-bold">

  {user?.fullName?.charAt(0)?.toUpperCase()}

</div>
                          <div>

                            <h2 className="font-bold text-lg">
                              {user.fullName}
                            </h2>

                            <p className="text-blue-100">
                            {user?.email || "user@example.com"}
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="py-2">

                        <Link
                          to="/profile"
                          className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50"
                          onClick={() => setOpen(false)}
                        >
                          <User size={20} />
                          Profile
                        </Link>

                        <Link
  to={user?.role === "ADMIN" ? "/admin/dashboard" : "/dashboard"}
  className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50"
  onClick={() => setOpen(false)}
>
  <LayoutDashboard size={20} />
  Dashboard
</Link>

                        <Link
                          to="/history"
                          className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50"
                          onClick={() => setOpen(false)}
                        >
                          <History size={20} />
                          Loan History
                        </Link>

                        <Link
                          to="/settings"
                          className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50"
                          onClick={() => setOpen(false)}
                        >
                          <Settings size={20} />
                          Settings
                        </Link>

                        <hr />

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-4 px-6 py-4 text-red-600 hover:bg-red-50"
                        >
                          <LogOut size={20} />
                          Logout
                        </button>

                      </div>

                    </div>

                  )}

                </div>
              </>
            )}

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileMenu && (

          <div className="lg:hidden pb-6 flex flex-col gap-2">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className="px-4 py-3 rounded-xl hover:bg-blue-50"
              >
                {item.name}
              </Link>

            ))}

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;