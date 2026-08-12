import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <AppRoutes />

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;