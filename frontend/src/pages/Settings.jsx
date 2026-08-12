import {
  User,
  Bell,
  Lock,
  Moon,
  ShieldCheck,
  Database,
} from "lucide-react";

function Settings() {

  const settings = [
    {
      title: "Profile Settings",
      description: "Update your personal information",
      icon: <User className="text-blue-600" size={28} />,
      button: "Edit",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Notifications",
      description: "Manage notification preferences",
      icon: <Bell className="text-green-600" size={28} />,
      button: "Manage",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Change Password",
      description: "Keep your account secure",
      icon: <Lock className="text-purple-600" size={28} />,
      button: "Update",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Privacy & Security",
      description: "Manage account privacy settings",
      icon: <ShieldCheck className="text-red-600" size={28} />,
      button: "View",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      title: "Database Backup",
      description: "Backup your loan history",
      icon: <Database className="text-indigo-600" size={28} />,
      button: "Backup",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      title: "Dark Mode",
      description: "Coming Soon",
      icon: <Moon className="text-orange-500" size={28} />,
      button: "Enable",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          Settings
        </h1>

        <div className="space-y-6">

          {settings.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex justify-between items-center"
            >

              <div className="flex items-center gap-5">

                <div className="bg-gray-100 p-4 rounded-xl">
                  {item.icon}
                </div>

                <div>

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-gray-500">
                    {item.description}
                  </p>

                </div>

              </div>

              <button
                className={`${item.color} text-white px-6 py-2 rounded-lg transition`}
              >
                {item.button}
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Settings;