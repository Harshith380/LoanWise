import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;