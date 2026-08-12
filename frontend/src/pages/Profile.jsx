import { User, Mail, Phone, MapPin } from "lucide-react";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-12">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <User size={50} />
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                {user?.fullName || "User"}
              </h1>

              <p className="text-gray-500">
                LoanWise User
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span>{user?.email || "Not Available"}</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span>Not Added</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span>India</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;