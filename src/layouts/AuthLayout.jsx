import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const AuthLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
