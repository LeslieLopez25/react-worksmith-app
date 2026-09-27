import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import ThemeController from "../components/ThemeController.jsx";

const AuthLayout = () => {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeController />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
